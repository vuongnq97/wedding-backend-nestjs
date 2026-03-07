import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SupabaseService } from '../../supabase/supabase.service';
export declare class SupabaseAuthGuard implements CanActivate {
    private supabase;
    private reflector;
    constructor(supabase: SupabaseService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
}
