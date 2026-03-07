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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeddingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const wedding_service_1 = require("./wedding.service");
const wedding_dto_1 = require("./dto/wedding.dto");
const public_decorator_1 = require("../common/decorators/public.decorator");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
let WeddingController = class WeddingController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto, userId) {
        const result = await this.service.create(dto, userId);
        return {
            succeeded: true,
            message: 'Wedding created successfully',
            data: result,
            statusCode: 200,
        };
    }
    async update(dto) {
        const result = await this.service.update(dto);
        return {
            succeeded: true,
            message: 'Wedding updated successfully',
            data: result,
            statusCode: 200,
        };
    }
    async getBySlug(slug) {
        const result = await this.service.getBySlug(slug);
        if (!result) {
            throw new common_1.NotFoundException('Wedding not found');
        }
        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }
    async getByUserId(userId) {
        const result = await this.service.getByUserId(userId);
        if (!result) {
            throw new common_1.NotFoundException('Wedding not found');
        }
        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }
};
exports.WeddingController = WeddingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wedding_dto_1.WeddingDto, String]),
    __metadata("design:returntype", Promise)
], WeddingController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wedding_dto_1.WeddingDto]),
    __metadata("design:returntype", Promise)
], WeddingController.prototype, "update", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeddingController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)('my/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeddingController.prototype, "getByUserId", null);
exports.WeddingController = WeddingController = __decorate([
    (0, swagger_1.ApiTags)('Wedding'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('api/wedding'),
    __metadata("design:paramtypes", [wedding_service_1.WeddingService])
], WeddingController);
//# sourceMappingURL=wedding.controller.js.map