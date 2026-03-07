import { CreateRsvpDto } from './dto/rsvp.dto';
import { RsvpService } from './rsvp.service';
export declare class RsvpController {
    private service;
    constructor(service: RsvpService);
    create(dto: CreateRsvpDto): Promise<{
        succeeded: boolean;
        message: string;
        data: import("./dto/rsvp.dto").RsvpDto;
        statusCode: number;
    }>;
    getByWeddingId(weddingId: string): Promise<{
        succeeded: boolean;
        message: null;
        data: import("./dto/rsvp.dto").RsvpDto[];
        statusCode: number;
    }>;
}
