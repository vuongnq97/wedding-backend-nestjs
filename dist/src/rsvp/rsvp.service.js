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
exports.RsvpService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RsvpService = class RsvpService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    parseAttending(value) {
        if (value === undefined || value === null)
            return 0;
        if (typeof value === 'number')
            return value;
        const map = { yes: 1, no: 2, unknown: 0 };
        return map[value.toLowerCase()] ?? 0;
    }
    async create(dto) {
        let weddingId = dto.weddingId;
        if (!weddingId && dto.slug) {
            const wedding = await this.prisma.wedding.findUnique({
                where: { slug: dto.slug },
            });
            if (!wedding)
                throw new common_1.NotFoundException('Wedding not found');
            weddingId = wedding.id;
        }
        if (!weddingId) {
            throw new common_1.BadRequestException('weddingId or slug is required');
        }
        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
        });
        if (!wedding)
            throw new common_1.NotFoundException('Wedding not found');
        const created = await this.prisma.rsvp.create({
            data: {
                weddingId,
                fullName: dto.fullName,
                attending: this.parseAttending(dto.attending),
                guests: dto.guests ?? 1,
                message: dto.message,
            },
        });
        return created;
    }
    async getByWeddingId(weddingId) {
        const rsvps = await this.prisma.rsvp.findMany({
            where: { weddingId },
            orderBy: { createdAt: 'desc' },
        });
        return rsvps;
    }
};
exports.RsvpService = RsvpService;
exports.RsvpService = RsvpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RsvpService);
//# sourceMappingURL=rsvp.service.js.map