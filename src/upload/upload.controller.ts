import {
    Body,
    Controller,
    Post,
    BadRequestException,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { StorageService } from './storage.service';
import { UploadRequestDto } from './dto/upload.dto';

@ApiTags('Upload')
@Controller('api/Upload')
@ApiBearerAuth()
export class UploadController {
    constructor(private storageService: StorageService) { }

    @Post('music')
    async uploadMusic(@Body() request: UploadRequestDto) {
        if (!request.contentType.startsWith('audio/')) {
            throw new BadRequestException({
                message: 'Invalid file type. Only audio files are allowed.',
                errorCode: 'INVALID_FILE_TYPE',
            });
        }

        const fileName = this.storageService.buildFileName('music', request.fileName);
        const result = await this.storageService.generateSasToken(
            fileName,
            request.contentType,
        );

        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }

    @Post('photo')
    async uploadPhoto(@Body() request: UploadRequestDto) {
        if (!request.contentType.startsWith('image/')) {
            throw new BadRequestException({
                message: 'Invalid file type. Only image files are allowed.',
                errorCode: 'INVALID_FILE_TYPE',
            });
        }

        if (!request.imageType) {
            throw new BadRequestException({
                message: 'Image type is required.',
                errorCode: 'MISSING_IMAGE_TYPE',
            });
        }

        const fileName = this.storageService.buildFileName(
            request.imageType,
            request.fileName,
        );
        const result = await this.storageService.generateSasToken(
            fileName,
            request.contentType,
        );

        return { succeeded: true, message: null, data: result, statusCode: 200 };
    }
}
