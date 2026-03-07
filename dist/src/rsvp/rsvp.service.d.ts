import { PrismaService } from '../prisma/prisma.service';
import { CreateRsvpDto, RsvpDto } from './dto/rsvp.dto';
export declare class RsvpService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateRsvpDto): Promise<RsvpDto>;
    getByWeddingId(weddingId: string): Promise<RsvpDto[]>;
}
