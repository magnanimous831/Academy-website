import { useBusTracking } from '@/hooks/useBusTracking';
import { Bus, MapPin, Navigation, Clock, Loader2, AlertCircle, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LiveBusTrackerProps {
  selectedRouteId?: string;
}

export function LiveBusTracker({ selectedRouteId }: LiveBusTrackerProps) {
  const { buses, routes, loading, error, getBusForRoute, getStopsForRoute, getEstimatedArrival } = useBusTracking();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-muted-foreground">Loading live tracking...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12 text-destructive">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>{error}</span>
      </div>
    );
  }

  const displayRoutes = selectedRouteId 
    ? routes.filter(r => r.id === selectedRouteId)
    : routes;

  if (displayRoutes.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Bus className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>No bus routes available for tracking</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {displayRoutes.map(route => {
        const bus = getBusForRoute(route.id);
        const stops = getStopsForRoute(route.id);
        const isActive = bus?.status === 'active';

        return (
          <div
            key={route.id}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft"
          >
            {/* Route Header */}
            <div className={cn(
              "px-6 py-4 flex items-center justify-between",
              isActive 
                ? "bg-gradient-to-r from-school-green/20 to-school-green/10" 
                : "bg-muted/50"
            )}>
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  isActive ? "bg-school-green text-white" : "bg-muted text-muted-foreground"
                )}>
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{route.route_name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {route.start_location} → {route.end_location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {isActive ? (
                  <span className="flex items-center gap-1 text-sm font-medium text-school-green bg-school-green/20 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-school-green rounded-full animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Inactive
                  </span>
                )}
              </div>
            </div>

            {/* Bus & Driver Info */}
            {bus && (
              <div className="px-6 py-4 border-b border-border bg-muted/30">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Bus Number</p>
                      <p className="font-bold text-foreground">{bus.bus_number}</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <p className="text-sm text-muted-foreground">Driver</p>
                      <p className="font-medium text-foreground">{bus.driver_name}</p>
                    </div>
                    {bus.driver_phone && (
                      <>
                        <div className="h-8 w-px bg-border" />
                        <a 
                          href={`tel:${bus.driver_phone}`}
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm font-medium">{bus.driver_phone}</span>
                        </a>
                      </>
                    )}
                  </div>
                  
                  {bus.current_lat && bus.current_lng && (
                    <div className="flex items-center gap-2 text-sm">
                      <Navigation className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Last updated: {bus.last_location_update 
                          ? new Date(bus.last_location_update).toLocaleTimeString()
                          : 'N/A'
                        }
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Stops Timeline */}
            <div className="px-6 py-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bus Stops
              </h4>
              
              {stops.length === 0 ? (
                <p className="text-sm text-muted-foreground italic">No stops configured for this route</p>
              ) : (
                <div className="space-y-3">
                  {stops.map((stop, index) => {
                    const eta = bus ? getEstimatedArrival(bus.id, stop.id) : null;
                    const isLast = index === stops.length - 1;

                    return (
                      <div key={stop.id} className="flex items-start gap-3">
                        {/* Timeline dot and line */}
                        <div className="flex flex-col items-center">
                          <div className={cn(
                            "w-3 h-3 rounded-full border-2",
                            index === 0 
                              ? "bg-primary border-primary" 
                              : isLast 
                                ? "bg-school-green border-school-green"
                                : "bg-card border-muted-foreground"
                          )} />
                          {!isLast && (
                            <div className="w-0.5 h-8 bg-border" />
                          )}
                        </div>
                        
                        {/* Stop details */}
                        <div className="flex-1 flex items-center justify-between pb-3">
                          <div>
                            <p className="font-medium text-foreground">{stop.stop_name}</p>
                            {stop.estimated_arrival_minutes && (
                              <p className="text-xs text-muted-foreground">
                                Scheduled: +{stop.estimated_arrival_minutes} min from start
                              </p>
                            )}
                          </div>
                          
                          {isActive && eta && (
                            <span className="flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                              <Clock className="w-3 h-3" />
                              {eta}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
