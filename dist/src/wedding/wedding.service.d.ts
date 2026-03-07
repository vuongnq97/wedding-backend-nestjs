import { PrismaService } from '../prisma/prisma.service';
import { WeddingDto } from './dto/wedding.dto';
export declare class WeddingService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateSlug;
    create(dto: WeddingDto, userId: string): Promise<WeddingDto>;
    update(dto: WeddingDto): Promise<WeddingDto>;
    getBySlug(slug: string): Promise<WeddingDto | null>;
    getByUserId(userId: string): Promise<WeddingDto | null>;
    private mapToDto;
}
