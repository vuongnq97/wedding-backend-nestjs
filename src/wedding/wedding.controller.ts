import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    NotFoundException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { WeddingService } from './wedding.service';
import { WeddingDto } from './dto/wedding.dto';
import { Public } from '../common/decorators/public.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Wedding')
@ApiBearerAuth()
@Controller('api/wedding')
export class WeddingController {
    constructor(private service: WeddingService) { }

    @Post()
    async create(@Body() dto: WeddingDto, @CurrentUser('id') userId: string) {
        const result = await this.service.create(dto, userId);
        return {
            succeeded: true,
            message: 'Wedding created successfully',
            data: result,
            statusCode: 200,
        };
    }

    @Put()
    async update(@Body() dto: WeddingDto) {
        const result = await this.service.update(dto);
        return {
            succeeded: true,
            message: 'Wedding updated successfully',
            data: result,
            statusCode: 200,
        };
    }

    @Public()
    @Get(':slug')
    async getBySlug(@Param('slug') slug: string) {
        const result = await this.service.getBySlug(slug);
        if (!result) {
            throw new NotFoundException('Wedding not found');
        }
        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }

    @Get('my/:userId')
    async getByUserId(@Param('userId') userId: string) {
        const result = await this.service.getByUserId(userId);
        if (!result) {
            throw new NotFoundException('Wedding not found');
        }
        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }
}
