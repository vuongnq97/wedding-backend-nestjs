export declare enum AttendingStatus {
    Unknown = 0,
    Yes = 1,
    No = 2
}
export declare class CreateRsvpDto {
    weddingId: string;
    fullName: string;
    attending: AttendingStatus;
    guests: number;
    message: string;
}
export declare class RsvpDto extends CreateRsvpDto {
    id: string;
    createdAt: Date;
}
