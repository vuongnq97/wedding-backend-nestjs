import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateRsvpDto {
    @IsUUID()
    @IsOptional()
    weddingId?: string;

    @IsString()
    @IsOptional()
    slug?: string; // FE sends slug instead of weddingId

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsOptional()
    attending: number | string; // FE sends "yes"/"no", BE converts to 0/1/2

    @IsOptional()
    guests?: number;

    @IsString()
    @IsOptional()
    message?: string;
}

export class RsvpDto extends CreateRsvpDto {
    @IsUUID()
    id: string;

    @IsOptional()
    createdAt: Date;
}
