import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    private client: SupabaseClient;

    constructor(private config: ConfigService) {
        const url = config.getOrThrow<string>('SUPABASE_URL');
        const serviceKey = config.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY');
        this.client = createClient(url, serviceKey);
    }

    getClient(): SupabaseClient {
        return this.client;
    }

    async getUser(token: string) {
        const {
            data: { user },
            error,
        } = await this.client.auth.getUser(token);
        if (error || !user) {
            throw error || new Error('User not found');
        }
        return user;
    }
}
