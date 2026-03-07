import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { UploadResultDto } from './dto/upload.dto';
import { randomUUID } from 'crypto';
import * as path from 'path';

@Injectable()
export class StorageService {
    private readonly BUCKET = 'wedding-assets';
    private readonly logger = new Logger(StorageService.name);

    constructor(private supabase: SupabaseService) { }

    generateSignedUploadUrl(fileName: string, contentType: string): UploadResultDto {
        const client = this.supabase.getClient();
        const {
            data: { publicUrl },
        } = client.storage.from(this.BUCKET).getPublicUrl(fileName);

        // Return public URL — client uploads via Supabase SDK directly
        // or we can generate a signed upload URL
        return {
            uploadUrl: publicUrl,
            blobUrl: publicUrl,
        };
    }

    async generateSasToken(fileName: string, contentType: string): Promise<UploadResultDto> {
        const client = this.supabase.getClient();

        // Create a signed URL for upload (valid 10 minutes)
        const { data, error } = await client.storage
            .from(this.BUCKET)
            .createSignedUploadUrl(fileName);

        if (error) {
            this.logger.error(`Failed to generate signed URL: ${error.message}`);
            throw error;
        }

        const {
            data: { publicUrl },
        } = client.storage.from(this.BUCKET).getPublicUrl(fileName);

        return {
            uploadUrl: data.signedUrl,
            blobUrl: publicUrl,
        };
    }

    buildFileName(prefix: string, originalName: string): string {
        const ext = path.extname(originalName);
        return `${prefix}/${randomUUID()}${ext}`;
    }
}
