import { Type } from 'class-transformer';
import {
    IsArray,
    IsBoolean,
    IsDateString,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested,
} from 'class-validator';

// === PersonDetail — matches .NET PersonDetail.cs ===
export class PersonDetailDto {
    @IsString()
    @IsOptional()
    fullName: string;

    @IsString()
    @IsOptional()
    fatherName: string;

    @IsString()
    @IsOptional()
    motherName: string;

    @IsString()
    @IsOptional()
    birthOrder: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    @IsOptional()
    photoUrl?: string;
}

// === MilestoneDto — matches .NET MilestoneDto ===
export class MilestoneDto {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsDateString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    photoUrl?: string;
}

// === WeddingPhotoDto — matches .NET WeddingPhotoDto ===
export class WeddingPhotoDto {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    url: string;
}

// === BankAccountDto — matches .NET BankAccountDto ===
export class BankAccountDto {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    bankName: string;

    @IsString()
    accountNumber: string;

    @IsString()
    accountHolder: string;

    @IsOptional()
    owner: number | string; // FE sends 0 (groom) / 1 (bride)
}

// === NotificationDto — matches .NET NotificationDetail.cs ===
export class NotificationDto {
    @IsString()
    @IsOptional()
    line1: string;

    @IsString()
    @IsOptional()
    line2: string;
}

// === CeremonyDto — matches .NET CeremonyDetail.cs ===
export class CeremonyDto {
    @IsBoolean()
    @IsOptional()
    show: boolean;

    @IsDateString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    time?: string;
}

// === ReceptionDto — matches .NET ReceptionDetail.cs ===
export class ReceptionDto {
    @IsDateString()
    @IsOptional()
    date: string;

    @IsString()
    @IsOptional()
    time: string;

    @IsString()
    @IsOptional()
    address: string;
}

// === MapDto — matches .NET MapDetail.cs ===
export class MapDto {
    @IsBoolean()
    @IsOptional()
    show: boolean;

    @IsString()
    @IsOptional()
    link?: string;

    @IsString()
    @IsOptional()
    locationName?: string;

    @IsString()
    @IsOptional()
    locationAddress?: string;

    @IsNumber()
    @IsOptional()
    latitude?: number;

    @IsNumber()
    @IsOptional()
    longitude?: number;
}

// === MusicDto — matches .NET MusicDetail.cs ===
export class MusicDto {
    @IsBoolean()
    @IsOptional()
    enabled: boolean;

    @IsString()
    @IsOptional()
    url?: string;

    @IsString()
    @IsOptional()
    name?: string;
}

// === WeddingDto — matches .NET WeddingDto.cs ===
export class WeddingDto {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsUUID()
    @IsOptional()
    ownerUserId?: string;

    @IsString()
    @IsOptional()
    heroBannerUrl?: string;

    @IsString()
    @IsNotEmpty()
    templateCode: string;

    @IsDateString()
    @IsOptional()
    weddingDate?: string;

    @ValidateNested()
    @Type(() => PersonDetailDto)
    groom: PersonDetailDto;

    @ValidateNested()
    @Type(() => PersonDetailDto)
    bride: PersonDetailDto;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MilestoneDto)
    milestones: MilestoneDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => WeddingPhotoDto)
    albumPhotos: WeddingPhotoDto[];

    @ValidateNested()
    @Type(() => NotificationDto)
    notification: NotificationDto;

    @ValidateNested()
    @Type(() => CeremonyDto)
    ceremony: CeremonyDto;

    @ValidateNested()
    @Type(() => ReceptionDto)
    reception: ReceptionDto;

    @ValidateNested()
    @Type(() => MapDto)
    @IsOptional()
    map?: MapDto;

    @IsString()
    @IsOptional()
    thankYouMessage?: string;

    @IsBoolean()
    guestbookEnabled: boolean;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BankAccountDto)
    bankAccounts: BankAccountDto[];

    @ValidateNested()
    @Type(() => MusicDto)
    @IsOptional()
    music?: MusicDto;

    @IsBoolean()
    showAds: boolean;

    @IsBoolean()
    showLoveStory: boolean;

    @IsOptional()
    createdAt?: string;
}
