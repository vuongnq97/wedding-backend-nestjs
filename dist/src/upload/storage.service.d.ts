import { SupabaseService } from '../supabase/supabase.service';
import { UploadResultDto } from './dto/upload.dto';
export declare class StorageService {
    private supabase;
    private readonly BUCKET;
    private readonly logger;
    constructor(supabase: SupabaseService);
    generateSignedUploadUrl(fileName: string, contentType: string): UploadResultDto;
    generateSasToken(fileName: string, contentType: string): Promise<UploadResultDto>;
    buildFileName(prefix: string, originalName: string): string;
}
