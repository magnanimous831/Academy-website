-- Create buses table
CREATE TABLE public.buses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  bus_number TEXT NOT NULL UNIQUE,
  driver_name TEXT NOT NULL,
  driver_phone TEXT,
  capacity INTEGER DEFAULT 40,
  current_lat DECIMAL(10, 8),
  current_lng DECIMAL(11, 8),
  last_location_update TIMESTAMP WITH TIME ZONE DEFAULT now(),
  status TEXT DEFAULT 'inactive' CHECK (status IN ('active', 'inactive', 'maintenance')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bus routes table
CREATE TABLE public.bus_routes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  route_name TEXT NOT NULL,
  bus_id UUID REFERENCES public.buses(id) ON DELETE SET NULL,
  start_location TEXT NOT NULL,
  end_location TEXT NOT NULL,
  morning_departure TIME,
  afternoon_departure TIME,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bus stops table
CREATE TABLE public.bus_stops (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  route_id UUID REFERENCES public.bus_routes(id) ON DELETE CASCADE NOT NULL,
  stop_name TEXT NOT NULL,
  stop_order INTEGER NOT NULL,
  lat DECIMAL(10, 8) NOT NULL,
  lng DECIMAL(11, 8) NOT NULL,
  estimated_arrival_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create parent subscriptions for notifications
CREATE TABLE public.transport_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  parent_email TEXT,
  child_name TEXT NOT NULL,
  stop_id UUID REFERENCES public.bus_stops(id) ON DELETE CASCADE NOT NULL,
  notify_before_minutes INTEGER DEFAULT 10,
  sms_enabled BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create notification logs
CREATE TABLE public.notification_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subscription_id UUID REFERENCES public.transport_subscriptions(id) ON DELETE CASCADE NOT NULL,
  message TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'failed', 'pending'))
);

-- Enable RLS on all tables
ALTER TABLE public.buses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bus_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bus_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transport_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_logs ENABLE ROW LEVEL SECURITY;

-- Public read access for buses, routes, and stops
CREATE POLICY "Anyone can view buses" ON public.buses FOR SELECT USING (true);
CREATE POLICY "Anyone can view routes" ON public.bus_routes FOR SELECT USING (true);
CREATE POLICY "Anyone can view stops" ON public.bus_stops FOR SELECT USING (true);

-- Allow anyone to subscribe for notifications
CREATE POLICY "Anyone can create subscriptions" ON public.transport_subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view subscriptions" ON public.transport_subscriptions FOR SELECT USING (true);

-- Notification logs policies
CREATE POLICY "System can insert notification logs" ON public.notification_logs FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view notification logs" ON public.notification_logs FOR SELECT USING (true);

-- Enable realtime for bus location updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.buses;