export declare class CreateRsvpDto {
    weddingId?: string;
    slug?: string;
    fullName: string;
    attending: number | string;
    guests?: number;
    message?: string;
}
export declare class RsvpDto extends CreateRsvpDto {
    id: string;
    createdAt: Date;
}
