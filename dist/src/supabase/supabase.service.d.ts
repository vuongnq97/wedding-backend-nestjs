import { ConfigService } from '@nestjs/config';
import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private config;
    private client;
    constructor(config: ConfigService);
    getClient(): SupabaseClient;
    getUser(token: string): Promise<import("@supabase/supabase-js").AuthUser>;
}
