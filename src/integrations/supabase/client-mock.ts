// client-mock.ts - Mock Supabase client for testing
import { Database } from './types';

// Mock data for testing
const mockBuses = [
  {
    id: 'bus-1',
    bus_number: 'BUS-101',
    driver_name: 'John Wilson',
    driver_phone: '+1234567890',
    current_lat: 40.7128,
    current_lng: -74.0060,
    status: 'active',
    last_location_update: new Date().toISOString(),
    created_at: new Date().toISOString()
  },
  {
    id: 'bus-2',
    bus_number: 'BUS-102',
    driver_name: 'Sarah Johnson',
    driver_phone: '+1234567891',
    current_lat: 40.7589,
    current_lng: -73.9851,
    status: 'active',
    last_location_update: new Date().toISOString(),
    created_at: new Date().toISOString()
  },
  {
    id: 'bus-3',
    bus_number: 'BUS-103',
    driver_name: 'Michael Brown',
    driver_phone: '+1234567892',
    current_lat: null,
    current_lng: null,
    status: 'inactive',
    last_location_update: null,
    created_at: new Date().toISOString()
  }
];

const mockRoutes = [
  {
    id: 'route-1',
    route_name: 'North Route',
    start_location: 'Downtown',
    end_location: 'North School',
    morning_departure: '06:30:00',
    afternoon_departure: '15:30:00',
    bus_id: 'bus-1',
    created_at: new Date().toISOString()
  },
  {
    id: 'route-2',
    route_name: 'South Route',
    start_location: 'Main Square',
    end_location: 'South Campus',
    morning_departure: '06:45:00',
    afternoon_departure: '15:35:00',
    bus_id: 'bus-2',
    created_at: new Date().toISOString()
  },
  {
    id: 'route-3',
    route_name: 'West Route',
    start_location: 'West Park',
    end_location: 'Central School',
    morning_departure: '06:40:00',
    afternoon_departure: '15:40:00',
    bus_id: null,
    created_at: new Date().toISOString()
  }
];

const mockStops = [
  {
    id: 'stop-1',
    route_id: 'route-1',
    stop_name: 'Main St & 1st Ave',
    stop_order: 1,
    lat: 40.7128,
    lng: -74.0060,
    estimated_arrival_minutes: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'stop-2',
    route_id: 'route-1',
    stop_name: 'Oak St & Maple Ave',
    stop_order: 2,
    lat: 40.7150,
    lng: -74.0080,
    estimated_arrival_minutes: 10,
    created_at: new Date().toISOString()
  },
  {
    id: 'stop-3',
    route_id: 'route-1',
    stop_name: 'Central Park Entrance',
    stop_order: 3,
    lat: 40.7829,
    lng: -73.9654,
    estimated_arrival_minutes: 15,
    created_at: new Date().toISOString()
  },
  {
    id: 'stop-4',
    route_id: 'route-2',
    stop_name: 'Lakeside Heights Mall',
    stop_order: 1,
    lat: 40.7580,
    lng: -73.9855,
    estimated_arrival_minutes: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'stop-5',
    route_id: 'route-2',
    stop_name: 'River Park School Lane',
    stop_order: 2,
    lat: 40.7620,
    lng: -73.9820,
    estimated_arrival_minutes: 10,
    created_at: new Date().toISOString()
  }
];

// Mock Supabase client
export const supabase = {
  from: (table: string) => ({
    select: (columns: string = '*') => ({
      eq: (column: string, value: any) => ({
        data: table === 'buses' ? mockBuses.filter(b => (b as any)[column] === value) :
               table === 'bus_routes' ? mockRoutes.filter(r => (r as any)[column] === value) :
               mockStops.filter(s => (s as any)[column] === value),
        error: null
      }),
      order: (column: string, options: { ascending: boolean }) => ({
        data: table === 'buses' ? mockBuses :
               table === 'bus_routes' ? mockRoutes :
               [...mockStops].sort((a, b) => options.ascending ? a.stop_order - b.stop_order : b.stop_order - a.stop_order),
        error: null
      }),
      data: table === 'buses' ? mockBuses :
            table === 'bus_routes' ? mockRoutes :
            mockStops,
      error: null
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => {
        console.log('📝 Mock UPDATE:', { table, column, value, data });
        
        // Simulate update
        if (table === 'buses') {
          const busIndex = mockBuses.findIndex(b => (b as any)[column] === value);
          if (busIndex !== -1) {
            mockBuses[busIndex] = { ...mockBuses[busIndex], ...data };
          }
        }
        
        return {
          data: null,
          error: null
        };
      }
    }),
    insert: (data: any) => ({
      data: null,
      error: null
    }),
    upsert: (data: any) => ({
      select: () => ({
        single: () => ({
          data: { id: 'mock-parent-id', ...data },
          error: null
        })
      })
    })
  }),
  channel: (name: string) => ({
    on: (event: string, filter: any, callback: Function) => {
      console.log(`📡 Mock realtime channel "${name}" listening for ${event}`);
      return {
        subscribe: () => {
          console.log('📡 Mock channel subscribed');
          return {
            unsubscribe: () => console.log('📡 Mock channel unsubscribed')
          };
        }
      };
    }
  }),
  removeChannel: (channel: any) => {
    console.log('📡 Mock channel removed');
  },
  rpc: (fn: string, params: any) => Promise.resolve({ data: null, error: null })
};

// For useBusTracking hook compatibility
export const createClient = () => supabase;