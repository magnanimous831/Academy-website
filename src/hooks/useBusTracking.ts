// useBusTracking.ts - Updated to use mock for now
import { useState, useEffect } from 'react';

interface BusLocation {
  id: string;
  bus_number: string;
  driver_name: string;
  driver_phone: string | null;
  current_lat: number | null;
  current_lng: number | null;
  status: string | null;
  last_location_update: string | null;
}

interface BusRoute {
  id: string;
  route_name: string;
  start_location: string;
  end_location: string;
  morning_departure: string | null;
  afternoon_departure: string | null;
  bus_id: string | null;
}

interface BusStop {
  id: string;
  route_id: string;
  stop_name: string;
  stop_order: number;
  lat: number;
  lng: number;
  estimated_arrival_minutes: number | null;
}

// Mock data - replace with real Supabase later
const mockBuses: BusLocation[] = [
  {
    id: 'bus-1',
    bus_number: 'BUS-101',
    driver_name: 'John Wilson',
    driver_phone: '+1234567890',
    current_lat: 40.7128,
    current_lng: -74.0060,
    status: 'active',
    last_location_update: new Date().toISOString()
  },
  {
    id: 'bus-2',
    bus_number: 'BUS-102',
    driver_name: 'Sarah Johnson',
    driver_phone: '+1234567891',
    current_lat: 40.7589,
    current_lng: -73.9851,
    status: 'active',
    last_location_update: new Date().toISOString()
  },
  {
    id: 'bus-3',
    bus_number: 'BUS-103',
    driver_name: 'Michael Brown',
    driver_phone: '+1234567892',
    current_lat: null,
    current_lng: null,
    status: 'inactive',
    last_location_update: null
  }
];

const mockRoutes: BusRoute[] = [
  {
    id: 'route-1',
    route_name: 'North Route',
    start_location: 'Downtown',
    end_location: 'North School',
    morning_departure: '06:30:00',
    afternoon_departure: '15:30:00',
    bus_id: 'bus-1'
  },
  {
    id: 'route-2',
    route_name: 'South Route',
    start_location: 'Main Square',
    end_location: 'South Campus',
    morning_departure: '06:45:00',
    afternoon_departure: '15:35:00',
    bus_id: 'bus-2'
  },
  {
    id: 'route-3',
    route_name: 'West Route',
    start_location: 'West Park',
    end_location: 'Central School',
    morning_departure: '06:40:00',
    afternoon_departure: '15:40:00',
    bus_id: null
  }
];

const mockStops: BusStop[] = [
  {
    id: 'stop-1',
    route_id: 'route-1',
    stop_name: 'Main St & 1st Ave',
    stop_order: 1,
    lat: 40.7128,
    lng: -74.0060,
    estimated_arrival_minutes: 5
  },
  {
    id: 'stop-2',
    route_id: 'route-1',
    stop_name: 'Oak St & Maple Ave',
    stop_order: 2,
    lat: 40.7150,
    lng: -74.0080,
    estimated_arrival_minutes: 10
  },
  {
    id: 'stop-3',
    route_id: 'route-1',
    stop_name: 'Central Park Entrance',
    stop_order: 3,
    lat: 40.7829,
    lng: -73.9654,
    estimated_arrival_minutes: 15
  },
  {
    id: 'stop-4',
    route_id: 'route-2',
    stop_name: 'Lakeside Heights Mall',
    stop_order: 1,
    lat: 40.7580,
    lng: -73.9855,
    estimated_arrival_minutes: 5
  },
  {
    id: 'stop-5',
    route_id: 'route-2',
    stop_name: 'River Park School Lane',
    stop_order: 2,
    lat: 40.7620,
    lng: -73.9820,
    estimated_arrival_minutes: 10
  }
];

export function useBusTracking() {
  const [buses, setBuses] = useState<BusLocation[]>([]);
  const [routes, setRoutes] = useState<BusRoute[]>([]);
  const [stops, setStops] = useState<BusStop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBuses(mockBuses);
      setRoutes(mockRoutes);
      setStops(mockStops);
      setLoading(false);
      console.log('✅ Mock bus data loaded');
    }, 1000);
  }, []);

  const getEstimatedArrival = (busId: string, stopId: string): string | null => {
    const bus = buses.find(b => b.id === busId);
    const stop = stops.find(s => s.id === stopId);
    
    if (!bus || !stop || !bus.current_lat || !bus.current_lng) {
      return 'No location data';
    }

    // Mock estimation
    const mockMinutes = Math.floor(Math.random() * 10) + 5;
    
    if (mockMinutes < 1) return 'Arriving now';
    if (mockMinutes === 1) return '1 min away';
    return `${mockMinutes} mins away`;
  };

  const getBusForRoute = (routeId: string): BusLocation | undefined => {
    const route = routes.find(r => r.id === routeId);
    if (!route?.bus_id) return undefined;
    return buses.find(b => b.id === route.bus_id);
  };

  const getStopsForRoute = (routeId: string): BusStop[] => {
    return stops.filter(s => s.route_id === routeId);
  };

  return {
    buses,
    routes,
    stops,
    loading,
    error,
    getEstimatedArrival,
    getBusForRoute,
    getStopsForRoute
  };
}