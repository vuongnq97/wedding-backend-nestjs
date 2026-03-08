"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeddingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
let WeddingService = class WeddingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateSlug(dto) {
        const groomName = dto.groom?.fullName ? dto.groom.fullName.trim().split(' ').pop().toLowerCase() : 'groom';
        const brideName = dto.bride?.fullName ? dto.bride.fullName.trim().split(' ').pop().toLowerCase() : 'bride';
        const date = dto.reception?.date ? new Date(dto.reception.date) : new Date();
        const datePart = date.toISOString().slice(0, 10).replace(/-/g, '');
        const slugBase = `${groomName}-${brideName}-${datePart}`;
        const existing = await this.prisma.wedding.findUnique({ where: { slug: slugBase } });
        if (!existing) {
            return slugBase;
        }
        const suffix = (0, crypto_1.randomUUID)().split('-')[0];
        return `${slugBase}-${suffix}`;
    }
    async create(dto, userId) {
        const slug = await this.generateSlug(dto);
        const created = await this.prisma.wedding.create({
            data: {
                ownerUserId: userId,
                slug,
                templateCode: dto.templateCode,
                weddingDate: new Date(dto.weddingDate || dto.reception?.date || new Date()),
                heroBannerUrl: dto.heroBannerUrl,
                groom: dto.groom,
                bride: dto.bride,
                milestones: dto.milestones,
                albumPhotos: dto.albumPhotos,
                notification: dto.notification,
                ceremony: dto.ceremony,
                reception: dto.reception,
                map: dto.map,
                music: dto.music,
                bankAccounts: dto.bankAccounts,
                thankYouMessage: dto.thankYouMessage,
                guestbookEnabled: dto.guestbookEnabled,
                showAds: dto.showAds,
                showLoveStory: dto.showLoveStory,
            },
        });
        return this.mapToDto(created);
    }
    async update(dto) {
        if (!dto.id)
            throw new common_1.BadRequestException('Wedding ID required');
        const existing = await this.prisma.wedding.findUnique({ where: { id: dto.id } });
        if (!existing)
            throw new common_1.NotFoundException('Wedding not found');
        let slug = existing.slug;
        if (dto.slug && dto.slug !== existing.slug) {
            const slugExists = await this.prisma.wedding.findUnique({ where: { slug: dto.slug } });
            if (slugExists)
                throw new common_1.BadRequestException('Slug already exists');
            slug = dto.slug;
        }
        const updated = await this.prisma.wedding.update({
            where: { id: dto.id },
            data: {
                slug,
                templateCode: dto.templateCode,
                weddingDate: new Date(dto.weddingDate || dto.reception?.date || existing.weddingDate),
                heroBannerUrl: dto.heroBannerUrl,
                groom: dto.groom,
                bride: dto.bride,
                milestones: dto.milestones,
                albumPhotos: dto.albumPhotos,
                notification: dto.notification,
                ceremony: dto.ceremony,
                reception: dto.reception,
                map: dto.map,
                music: dto.music,
                bankAccounts: dto.bankAccounts,
                thankYouMessage: dto.thankYouMessage,
                guestbookEnabled: dto.guestbookEnabled,
                showAds: dto.showAds,
                showLoveStory: dto.showLoveStory,
            }
        });
        return this.mapToDto(updated);
    }
    async getBySlug(slug) {
        const wedding = await this.prisma.wedding.findUnique({ where: { slug } });
        if (!wedding)
            return null;
        return this.mapToDto(wedding);
    }
    async getByUserId(userId) {
        const wedding = await this.prisma.wedding.findFirst({ where: { ownerUserId: userId } });
        if (!wedding)
            return null;
        return this.mapToDto(wedding);
    }
    mapToDto(entity) {
        return {
            ...entity,
        };
    }
};
exports.WeddingService = WeddingService;
exports.WeddingService = WeddingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WeddingService);
//# sourceMappingURL=wedding.service.js.map