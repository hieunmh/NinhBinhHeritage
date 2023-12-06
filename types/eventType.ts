import { Database } from "./supabase";

export type EventType = Database['public']['Tables']['event']['Row'];