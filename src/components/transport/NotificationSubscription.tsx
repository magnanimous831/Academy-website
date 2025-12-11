import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export function NotificationSubscription() {
  return (
    <div className="text-center p-6 border border-dashed rounded-2xl">
      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
        <Bell className="w-6 h-6 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Notification Feature
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        SMS/Email notifications will be available soon. Currently focusing on live bus tracking.
      </p>
      <Button variant="outline" disabled>
        Coming Soon
      </Button>
    </div>
  );
}