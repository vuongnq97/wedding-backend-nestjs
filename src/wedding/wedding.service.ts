import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WeddingDto } from './dto/wedding.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class WeddingService {
    constructor(private prisma: PrismaService) { }

    private async generateSlug(dto: WeddingDto): Promise<string> {
        const groomName = dto.groom?.fullName ? dto.groom.fullName.trim().split(' ').pop()!.toLowerCase() : 'groom';
        const brideName = dto.bride?.fullName ? dto.bride.fullName.trim().split(' ').pop()!.toLowerCase() : 'bride';

        const date = dto.reception?.date ? new Date(dto.reception.date) : new Date();
        const datePart = date.toISOString().slice(0, 10).replace(/-/g, '');

        const slugBase = `${groomName}-${brideName}-${datePart}`;

        const existing = await this.prisma.wedding.findUnique({ where: { slug: slugBase } });
        if (!existing) {
            return slugBase;
        }

        const suffix = randomUUID().split('-')[0];
        return `${slugBase}-${suffix}`;
    }

    async create(dto: WeddingDto, userId: string): Promise<WeddingDto> {
        const slug = await this.generateSlug(dto);

        const created = await this.prisma.wedding.create({
            data: {
                ownerUserId: userId,
                slug,
                templateCode: dto.templateCode,
                weddingDate: new Date(dto.weddingDate || new Date()),
                heroBannerUrl: dto.heroBannerUrl,

                groom: dto.groom as any,
                bride: dto.bride as any,
                milestones: dto.milestones as any,
                albumPhotos: dto.albumPhotos as any,
                notification: dto.notification as any,
                ceremony: dto.ceremony as any,
                reception: dto.reception as any,
                map: dto.map as any,
                music: dto.music as any,
                bankAccounts: dto.bankAccounts as any,

                thankYouMessage: dto.thankYouMessage,
                guestbookEnabled: dto.guestbookEnabled,
                showAds: dto.showAds,
                showLoveStory: dto.showLoveStory,
            },
        });
        return this.mapToDto(created);
    }

    async update(dto: WeddingDto): Promise<WeddingDto> {
        if (!dto.id) throw new BadRequestException('Wedding ID required');

        const existing = await this.prisma.wedding.findUnique({ where: { id: dto.id } });
        if (!existing) throw new NotFoundException('Wedding not found');

        let slug = existing.slug;
        if (dto.slug && dto.slug !== existing.slug) {
            const slugExists = await this.prisma.wedding.findUnique({ where: { slug: dto.slug } });
            if (slugExists) throw new BadRequestException('Slug already exists');
            slug = dto.slug;
        }

        const updated = await this.prisma.wedding.update({
            where: { id: dto.id },
            data: {
                slug,
                templateCode: dto.templateCode,
                weddingDate: new Date(dto.weddingDate),
                heroBannerUrl: dto.heroBannerUrl,

                groom: dto.groom as any,
                bride: dto.bride as any,
                milestones: dto.milestones as any,
                albumPhotos: dto.albumPhotos as any,
                notification: dto.notification as any,
                ceremony: dto.ceremony as any,
                reception: dto.reception as any,
                map: dto.map as any,
                music: dto.music as any,
                bankAccounts: dto.bankAccounts as any,

                thankYouMessage: dto.thankYouMessage,
                guestbookEnabled: dto.guestbookEnabled,
                showAds: dto.showAds,
                showLoveStory: dto.showLoveStory,
            }
        });

        return this.mapToDto(updated);
    }

    async getBySlug(slug: string): Promise<WeddingDto | null> {
        const wedding = await this.prisma.wedding.findUnique({ where: { slug } });
        if (!wedding) return null;
        return this.mapToDto(wedding);
    }

    async getByUserId(userId: string): Promise<WeddingDto | null> {
        const wedding = await this.prisma.wedding.findFirst({ where: { ownerUserId: userId } });
        if (!wedding) return null;
        return this.mapToDto(wedding);
    }

    // Mapper helper
    private mapToDto(entity: any): WeddingDto {
        return {
            ...entity,
            // JSON fields come back as objects, which match DTO structure mostly.
            // Typescript might complain about JsonValue vs Dto, hence `as any` or explicit mapping.
        };
    }
}
