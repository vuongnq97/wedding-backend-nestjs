import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export enum AttendingStatus {
    Unknown = 0,
    Yes = 1,
    No = 2,
}

export class CreateRsvpDto {
    @IsUUID()
    @IsNotEmpty()
    weddingId: string;

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsInt()
    @IsNotEmpty()
    attending: AttendingStatus;

    @IsInt()
    @IsNotEmpty()
    guests: number;

    @IsString()
    @IsOptional()
    message: string;
}

export class RsvpDto extends CreateRsvpDto {
    @IsUUID()
    id: string;

    @IsOptional()
    createdAt: Date;
}
