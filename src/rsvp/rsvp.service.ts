import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRsvpDto, RsvpDto } from './dto/rsvp.dto';

@Injectable()
export class RsvpService {
    constructor(private prisma: PrismaService) { }

    private parseAttending(value: number | string | undefined): number {
        if (value === undefined || value === null) return 0;
        if (typeof value === 'number') return value;
        // FE sends "yes" / "no"
        const map: Record<string, number> = { yes: 1, no: 2, unknown: 0 };
        return map[value.toLowerCase()] ?? 0;
    }

    async create(dto: CreateRsvpDto): Promise<RsvpDto> {
        let weddingId = dto.weddingId;

        // If FE sends slug instead of weddingId, look it up
        if (!weddingId && dto.slug) {
            const wedding = await this.prisma.wedding.findUnique({
                where: { slug: dto.slug },
            });
            if (!wedding) throw new NotFoundException('Wedding not found');
            weddingId = wedding.id;
        }

        if (!weddingId) {
            throw new BadRequestException('weddingId or slug is required');
        }

        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
        });
        if (!wedding) throw new NotFoundException('Wedding not found');

        const created = await this.prisma.rsvp.create({
            data: {
                weddingId,
                fullName: dto.fullName,
                attending: this.parseAttending(dto.attending),
                guests: dto.guests ?? 1,
                message: dto.message,
            },
        });

        return created as unknown as RsvpDto;
    }

    async getByWeddingId(weddingId: string): Promise<RsvpDto[]> {
        const rsvps = await this.prisma.rsvp.findMany({
            where: { weddingId },
            orderBy: { createdAt: 'desc' },
        });
        return rsvps as unknown as RsvpDto[];
    }
}
