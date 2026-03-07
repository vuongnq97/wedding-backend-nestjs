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
exports.RsvpController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rsvp_dto_1 = require("./dto/rsvp.dto");
const rsvp_service_1 = require("./rsvp.service");
const public_decorator_1 = require("../common/decorators/public.decorator");
let RsvpController = class RsvpController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto) {
        const result = await this.service.create(dto);
        return {
            succeeded: true,
            message: 'RSVP sent successfully',
            data: result,
            statusCode: 200,
        };
    }
    async getByWeddingId(weddingId) {
        const result = await this.service.getByWeddingId(weddingId);
        return {
            succeeded: true,
            message: null,
            data: result,
            statusCode: 200,
        };
    }
};
exports.RsvpController = RsvpController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rsvp_dto_1.CreateRsvpDto]),
    __metadata("design:returntype", Promise)
], RsvpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('wedding/:weddingId'),
    __param(0, (0, common_1.Param)('weddingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RsvpController.prototype, "getByWeddingId", null);
exports.RsvpController = RsvpController = __decorate([
    (0, swagger_1.ApiTags)('Rsvp'),
    (0, common_1.Controller)('api/rsvp'),
    __metadata("design:paramtypes", [rsvp_service_1.RsvpService])
], RsvpController);
//# sourceMappingURL=rsvp.controller.js.map