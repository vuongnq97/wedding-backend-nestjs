import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UploadRequestDto {
    @IsString()
    @IsNotEmpty()
    fileName: string;

    @IsString()
    @IsNotEmpty()
    contentType: string;

    @IsString()
    @IsOptional()
    imageType?: string; // e.g. "groom", "bride", "gallery"
}

export class UploadResultDto {
    uploadUrl: string;
    blobUrl: string;
}
