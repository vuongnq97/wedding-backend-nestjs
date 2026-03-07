import {
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRsvpDto } from './dto/rsvp.dto';
import { RsvpService } from './rsvp.service';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Rsvp')
@Controller('api/rsvp')
export class RsvpController {
    constructor(private service: RsvpService) { }

    @Public()
    @Post()
    async create(@Body() dto: CreateRsvpDto) {
        const result = await this.service.create(dto);
        return {
            succeeded: true,
            message: 'RSVP sent successfully',
            data: result,
            statusCode: 200,
        };
    }

    @Get('wedding/:weddingId')
    async getByWeddingId(@Param('weddingId') weddingId: string) {
        const result = await this.service.getByWeddingId(weddingId);
        return {
            succeeded: true,
            message: null,
            data: result,
            statusCode: 200,
        };
    }
}
