import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
export declare class AppController {
    private readonly appService;
    private readonly prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    health(): Promise<{
        status: string;
        db: string;
        result: unknown;
        env: {
            hasDbUrl: boolean;
            dbUrlPrefix: string;
            hasSupabaseUrl: boolean;
            nodeEnv: string | undefined;
        };
        error?: undefined;
    } | {
        status: string;
        db: string;
        error: any;
        env: {
            hasDbUrl: boolean;
            dbUrlPrefix: string;
            hasSupabaseUrl: boolean;
            nodeEnv: string | undefined;
        };
        result?: undefined;
    }>;
}
