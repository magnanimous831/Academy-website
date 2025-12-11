// TestBusUpdater.tsx - Updated for mock testing
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Navigation, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

export function TestBusUpdater() {
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');

  const handleTestUpdate = async () => {
    setUpdating(true);
    setMessage('');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful update
    setMessage('✅ Bus location updated (Mock mode)');
    console.log('📝 Mock: Bus location would be updated here');
    
    setUpdating(false);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-muted/30 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-school-orange mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground">Mock Mode Active</h4>
            <p className="text-sm text-muted-foreground">
              Using mock data for testing. No real Supabase connection needed.
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-school-green/10 rounded-xl">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-school-green mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground">Ready for Testing</h4>
            <p className="text-sm text-muted-foreground">
              All UI components work with mock data. No setup required!
            </p>
          </div>
        </div>
      </div>
      
      <Button
        onClick={handleTestUpdate}
        disabled={updating}
        variant="outline"
        className="w-full"
      >
        <RefreshCw className={`w-4 h-4 mr-2 ${updating ? 'animate-spin' : ''}`} />
        {updating ? 'Simulating Update...' : 'Test Bus Location Update'}
      </Button>
      
      {message && (
        <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm">
          {message}
        </div>
      )}
      
      <div className="text-xs text-muted-foreground space-y-2">
        <p className="font-medium">What's working:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ Live bus tracking UI</li>
          <li>✅ Bus routes and stops display</li>
          <li>✅ Estimated arrival times</li>
          <li>✅ Notification subscription form</li>
          <li>✅ All UI interactions</li>
        </ul>
        <p className="pt-2 border-t border-border mt-2">
          <span className="font-medium">Note:</span> Add Supabase credentials later for real data.
        </p>
      </div>
    </div>
  );
}