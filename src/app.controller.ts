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
      // Test DB connection
      const result = await this.prisma.$queryRawUnsafe('SELECT 1 as ok');
      return {
        status: 'ok',
        db: 'connected',
        result,
        env: {
          hasDbUrl: !!process.env.DATABASE_URL,
          dbUrlPrefix: process.env.DATABASE_URL?.substring(0, 30) + '...',
          hasSupabaseUrl: !!process.env.SUPABASE_URL,
          nodeEnv: process.env.NODE_ENV,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        db: 'failed',
        error: error.message,
        env: {
          hasDbUrl: !!process.env.DATABASE_URL,
          dbUrlPrefix: process.env.DATABASE_URL?.substring(0, 30) + '...',
          hasSupabaseUrl: !!process.env.SUPABASE_URL,
          nodeEnv: process.env.NODE_ENV,
        },
      };
    }
  }
}
