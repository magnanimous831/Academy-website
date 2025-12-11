export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      bus_routes: {
        Row: {
          afternoon_departure: string | null
          bus_id: string | null
          created_at: string
          end_location: string
          id: string
          morning_departure: string | null
          route_name: string
          start_location: string
        }
        Insert: {
          afternoon_departure?: string | null
          bus_id?: string | null
          created_at?: string
          end_location: string
          id?: string
          morning_departure?: string | null
          route_name: string
          start_location: string
        }
        Update: {
          afternoon_departure?: string | null
          bus_id?: string | null
          created_at?: string
          end_location?: string
          id?: string
          morning_departure?: string | null
          route_name?: string
          start_location?: string
        }
        Relationships: [
          {
            foreignKeyName: "bus_routes_bus_id_fkey"
            columns: ["bus_id"]
            isOneToOne: false
            referencedRelation: "buses"
            referencedColumns: ["id"]
          },
        ]
      }
      bus_stops: {
        Row: {
          created_at: string
          estimated_arrival_minutes: number | null
          id: string
          lat: number
          lng: number
          route_id: string
          stop_name: string
          stop_order: number
        }
        Insert: {
          created_at?: string
          estimated_arrival_minutes?: number | null
          id?: string
          lat: number
          lng: number
          route_id: string
          stop_name: string
          stop_order: number
        }
        Update: {
          created_at?: string
          estimated_arrival_minutes?: number | null
          id?: string
          lat?: number
          lng?: number
          route_id?: string
          stop_name?: string
          stop_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "bus_stops_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "bus_routes"
            referencedColumns: ["id"]
          },
        ]
      }
      buses: {
        Row: {
          bus_number: string
          capacity: number | null
          created_at: string
          current_lat: number | null
          current_lng: number | null
          driver_name: string
          driver_phone: string | null
          id: string
          last_location_update: string | null
          status: string | null
        }
        Insert: {
          bus_number: string
          capacity?: number | null
          created_at?: string
          current_lat?: number | null
          current_lng?: number | null
          driver_name: string
          driver_phone?: string | null
          id?: string
          last_location_update?: string | null
          status?: string | null
        }
        Update: {
          bus_number?: string
          capacity?: number | null
          created_at?: string
          current_lat?: number | null
          current_lng?: number | null
          driver_name?: string
          driver_phone?: string | null
          id?: string
          last_location_update?: string | null
          status?: string | null
        }
        Relationships: []
      }
      notification_logs: {
        Row: {
          id: string
          message: string
          sent_at: string
          status: string | null
          subscription_id: string
        }
        Insert: {
          id?: string
          message: string
          sent_at?: string
          status?: string | null
          subscription_id: string
        }
        Update: {
          id?: string
          message?: string
          sent_at?: string
          status?: string | null
          subscription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "transport_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      transport_subscriptions: {
        Row: {
          child_name: string
          created_at: string
          id: string
          is_active: boolean | null
          notify_before_minutes: number | null
          parent_email: string | null
          parent_name: string
          parent_phone: string
          sms_enabled: boolean | null
          stop_id: string
        }
        Insert: {
          child_name: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          notify_before_minutes?: number | null
          parent_email?: string | null
          parent_name: string
          parent_phone: string
          sms_enabled?: boolean | null
          stop_id: string
        }
        Update: {
          child_name?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          notify_before_minutes?: number | null
          parent_email?: string | null
          parent_name?: string
          parent_phone?: string
          sms_enabled?: boolean | null
          stop_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transport_subscriptions_stop_id_fkey"
            columns: ["stop_id"]
            isOneToOne: false
            referencedRelation: "bus_stops"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
