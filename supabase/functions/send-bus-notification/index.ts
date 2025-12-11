import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NotificationPayload {
  subscriptionId: string;
  busNumber: string;
  stopName: string;
  estimatedMinutes: number;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check for Twilio credentials
    const twilioAccountSid = Deno.env.get('TWILIO_ACCOUNT_SID');
    const twilioAuthToken = Deno.env.get('TWILIO_AUTH_TOKEN');
    const twilioPhoneNumber = Deno.env.get('TWILIO_PHONE_NUMBER');

    const { subscriptionId, busNumber, stopName, estimatedMinutes }: NotificationPayload = await req.json();

    console.log(`Processing notification for subscription: ${subscriptionId}`);

    // Get subscription details
    const { data: subscription, error: subError } = await supabase
      .from('transport_subscriptions')
      .select('*')
      .eq('id', subscriptionId)
      .maybeSingle();

    if (subError || !subscription) {
      console.error('Subscription not found:', subError);
      return new Response(
        JSON.stringify({ error: 'Subscription not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!subscription.is_active || !subscription.sms_enabled) {
      console.log('Subscription inactive or SMS disabled');
      return new Response(
        JSON.stringify({ message: 'Subscription inactive' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const message = `🚌 Bus Alert: ${busNumber} is ${estimatedMinutes} minutes away from ${stopName}. Please have ${subscription.child_name} ready!`;

    let status = 'pending';
    let smsResult = null;

    // Send SMS via Twilio if configured
    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;
        
        const formData = new URLSearchParams();
        formData.append('To', subscription.parent_phone);
        formData.append('From', twilioPhoneNumber);
        formData.append('Body', message);

        const twilioResponse = await fetch(twilioUrl, {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa(`${twilioAccountSid}:${twilioAuthToken}`),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });

        smsResult = await twilioResponse.json();
        
        if (twilioResponse.ok) {
          status = 'sent';
          console.log('SMS sent successfully:', smsResult.sid);
        } else {
          status = 'failed';
          console.error('Twilio error:', smsResult);
        }
      } catch (twilioError) {
        status = 'failed';
        console.error('Twilio request failed:', twilioError);
      }
    } else {
      // Twilio not configured - log the notification
      console.log('Twilio not configured. Would send SMS to:', subscription.parent_phone);
      console.log('Message:', message);
      status = 'logged';
    }

    // Log the notification
    const { error: logError } = await supabase
      .from('notification_logs')
      .insert({
        subscription_id: subscriptionId,
        message: message,
        status: status
      });

    if (logError) {
      console.error('Failed to log notification:', logError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        status,
        message: status === 'logged' ? 'SMS logged (Twilio not configured)' : 'Notification processed'
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing notification:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
