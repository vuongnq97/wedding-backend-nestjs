import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SupabaseModule } from './supabase/supabase.module';
import { SupabaseAuthGuard } from './common/guards/supabase-auth.guard';
import { WeddingModule } from './wedding/wedding.module';
import { RsvpModule } from './rsvp/rsvp.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    SupabaseModule,
    WeddingModule,
    RsvpModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Global auth guard — all endpoints protected by default
    // Use @Public() decorator to make specific endpoints public
    {
      provide: APP_GUARD,
      useClass: SupabaseAuthGuard,
    },
  ],
})
export class AppModule { }
