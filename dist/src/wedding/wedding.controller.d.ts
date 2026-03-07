import { WeddingService } from './wedding.service';
import { WeddingDto } from './dto/wedding.dto';
export declare class WeddingController {
    private service;
    constructor(service: WeddingService);
    create(dto: WeddingDto, userId: string): Promise<{
        succeeded: boolean;
        message: string;
        data: WeddingDto;
        statusCode: number;
    }>;
    update(dto: WeddingDto): Promise<{
        succeeded: boolean;
        message: string;
        data: WeddingDto;
        statusCode: number;
    }>;
    getBySlug(slug: string): Promise<{
        succeeded: boolean;
        message: null;
        data: WeddingDto;
        statusCode: number;
    }>;
    getByUserId(userId: string): Promise<{
        succeeded: boolean;
        message: null;
        data: WeddingDto;
        statusCode: number;
    }>;
}
