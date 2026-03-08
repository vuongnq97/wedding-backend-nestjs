import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(PrismaService.name);

    constructor() {
        const connectionString = process.env.DATABASE_URL;

        if (!connectionString) {
            throw new Error('DATABASE_URL is not set');
        }

        // Append sslmode=no-verify for Supabase pooler (self-signed cert)
        let finalUrl = connectionString;
        if (!finalUrl.includes('sslmode=')) {
            finalUrl += finalUrl.includes('?') ? '&sslmode=no-verify' : '?sslmode=no-verify';
        }

        const adapter = new PrismaPg({ connectionString: finalUrl });

        super({ adapter });

        this.logger.log('PrismaService initialized');
    }

    async onModuleInit() {
        try {
            await this.$connect();
            this.logger.log('Database connected successfully');
        } catch (error) {
            this.logger.error('Failed to connect to database', error);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
