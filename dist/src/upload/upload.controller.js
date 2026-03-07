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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const storage_service_1 = require("./storage.service");
const upload_dto_1 = require("./dto/upload.dto");
let UploadController = class UploadController {
    storageService;
    constructor(storageService) {
        this.storageService = storageService;
    }
    async uploadMusic(request) {
        if (!request.contentType.startsWith('audio/')) {
            throw new common_1.BadRequestException({
                message: 'Invalid file type. Only audio files are allowed.',
                errorCode: 'INVALID_FILE_TYPE',
            });
        }
        const fileName = this.storageService.buildFileName('music', request.fileName);
        const result = await this.storageService.generateSasToken(fileName, request.contentType);
        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }
    async uploadPhoto(request) {
        if (!request.contentType.startsWith('image/')) {
            throw new common_1.BadRequestException({
                message: 'Invalid file type. Only image files are allowed.',
                errorCode: 'INVALID_FILE_TYPE',
            });
        }
        if (!request.imageType) {
            throw new common_1.BadRequestException({
                message: 'Image type is required.',
                errorCode: 'MISSING_IMAGE_TYPE',
            });
        }
        const fileName = this.storageService.buildFileName(request.imageType, request.fileName);
        const result = await this.storageService.generateSasToken(fileName, request.contentType);
        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('music'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_dto_1.UploadRequestDto]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadMusic", null);
__decorate([
    (0, common_1.Post)('photo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_dto_1.UploadRequestDto]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadPhoto", null);
exports.UploadController = UploadController = __decorate([
    (0, swagger_1.ApiTags)('Upload'),
    (0, common_1.Controller)('api/Upload'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [storage_service_1.StorageService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map