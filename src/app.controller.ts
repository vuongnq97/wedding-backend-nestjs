import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) { }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Get('health')
  async health() {
    try {
      const count = await this.prisma.wedding.count();
      return {
        status: 'ok',
        db: 'connected',
        weddingCount: count,
        env: {
          hasDbUrl: !!process.env.DATABASE_URL,
          dbUrlPrefix: process.env.DATABASE_URL?.substring(0, 40) + '...',
          hasSupabaseUrl: !!process.env.SUPABASE_URL,
          nodeEnv: process.env.NODE_ENV,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        db: 'failed',
        errorMessage: error?.message || 'unknown',
        errorName: error?.name || 'unknown',
        errorStack: error?.stack?.substring(0, 300),
        env: {
          hasDbUrl: !!process.env.DATABASE_URL,
          dbUrlPrefix: process.env.DATABASE_URL?.substring(0, 40) + '...',
          hasSupabaseUrl: !!process.env.SUPABASE_URL,
          nodeEnv: process.env.NODE_ENV,
        },
      };
    }
  }
}
