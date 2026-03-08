export declare class PersonDetailDto {
    fullName: string;
    fatherName: string;
    motherName: string;
    birthOrder: string;
    address: string;
    photoUrl?: string;
}
export declare class MilestoneDto {
    id?: string;
    date?: string;
    title?: string;
    description?: string;
    photoUrl?: string;
}
export declare class WeddingPhotoDto {
    id?: string;
    url: string;
}
export declare class BankAccountDto {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    owner: number | string;
}
export declare class NotificationDto {
    line1: string;
    line2: string;
}
export declare class CeremonyDto {
    show: boolean;
    date?: string;
    time?: string;
}
export declare class ReceptionDto {
    date: string;
    time: string;
    address: string;
}
export declare class MapDto {
    show: boolean;
    link?: string;
    locationName?: string;
    locationAddress?: string;
    latitude?: number;
    longitude?: number;
}
export declare class MusicDto {
    enabled: boolean;
    url?: string;
    name?: string;
}
export declare class WeddingDto {
    id?: string;
    slug?: string;
    ownerUserId?: string;
    heroBannerUrl?: string;
    templateCode: string;
    weddingDate?: string;
    groom: PersonDetailDto;
    bride: PersonDetailDto;
    milestones: MilestoneDto[];
    albumPhotos: WeddingPhotoDto[];
    notification: NotificationDto;
    ceremony: CeremonyDto;
    reception: ReceptionDto;
    map?: MapDto;
    thankYouMessage?: string;
    guestbookEnabled: boolean;
    bankAccounts: BankAccountDto[];
    music?: MusicDto;
    showAds: boolean;
    showLoveStory: boolean;
    createdAt?: string;
}
