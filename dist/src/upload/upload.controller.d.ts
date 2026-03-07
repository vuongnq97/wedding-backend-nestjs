import { StorageService } from './storage.service';
import { UploadRequestDto } from './dto/upload.dto';
export declare class UploadController {
    private storageService;
    constructor(storageService: StorageService);
    uploadMusic(request: UploadRequestDto): Promise<{
        succeeded: boolean;
        message: null;
        data: import("./dto/upload.dto").UploadResultDto;
        statusCode: number;
    }>;
    uploadPhoto(request: UploadRequestDto): Promise<{
        succeeded: boolean;
        message: null;
        data: import("./dto/upload.dto").UploadResultDto;
        statusCode: number;
    }>;
}
