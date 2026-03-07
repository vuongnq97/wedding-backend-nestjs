import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRsvpDto, RsvpDto } from './dto/rsvp.dto';

@Injectable()
export class RsvpService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateRsvpDto): Promise<RsvpDto> {
        const wedding = await this.prisma.wedding.findUnique({ where: { id: dto.weddingId } });
        if (!wedding) throw new NotFoundException('Wedding not found');

        const created = await this.prisma.rsvp.create({
            data: {
                weddingId: dto.weddingId,
                fullName: dto.fullName,
                attending: dto.attending,
                guests: dto.guests,
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
