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
        weddingCount: number;
        env: {
            hasDbUrl: boolean;
            dbUrlPrefix: string;
            hasSupabaseUrl: boolean;
            nodeEnv: string | undefined;
        };
        errorMessage?: undefined;
        errorName?: undefined;
        errorStack?: undefined;
    } | {
        status: string;
        db: string;
        errorMessage: any;
        errorName: any;
        errorStack: any;
        env: {
            hasDbUrl: boolean;
            dbUrlPrefix: string;
            hasSupabaseUrl: boolean;
            nodeEnv: string | undefined;
        };
        weddingCount?: undefined;
    }>;
}
