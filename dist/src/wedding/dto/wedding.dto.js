"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeddingDto = exports.MusicDto = exports.MapDto = exports.ReceptionDto = exports.CeremonyDto = exports.NotificationDto = exports.BankAccountDto = exports.BankAccountOwner = exports.WeddingPhotoDto = exports.MilestoneDto = exports.PersonDetailDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PersonDetailDto {
    fullName;
    fatherName;
    motherName;
    birthOrder;
    address;
    photoUrl;
}
exports.PersonDetailDto = PersonDetailDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonDetailDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonDetailDto.prototype, "fatherName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonDetailDto.prototype, "motherName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonDetailDto.prototype, "birthOrder", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonDetailDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonDetailDto.prototype, "photoUrl", void 0);
class MilestoneDto {
    id;
    date;
    title;
    description;
    photoUrl;
}
exports.MilestoneDto = MilestoneDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MilestoneDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MilestoneDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MilestoneDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MilestoneDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MilestoneDto.prototype, "photoUrl", void 0);
class WeddingPhotoDto {
    id;
    url;
}
exports.WeddingPhotoDto = WeddingPhotoDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingPhotoDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WeddingPhotoDto.prototype, "url", void 0);
var BankAccountOwner;
(function (BankAccountOwner) {
    BankAccountOwner["Groom"] = "Groom";
    BankAccountOwner["Bride"] = "Bride";
})(BankAccountOwner || (exports.BankAccountOwner = BankAccountOwner = {}));
class BankAccountDto {
    id;
    bankName;
    accountNumber;
    accountHolder;
    owner;
}
exports.BankAccountDto = BankAccountDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BankAccountDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankAccountDto.prototype, "bankName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankAccountDto.prototype, "accountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankAccountDto.prototype, "accountHolder", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(BankAccountOwner),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BankAccountDto.prototype, "owner", void 0);
class NotificationDto {
    line1;
    line2;
}
exports.NotificationDto = NotificationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NotificationDto.prototype, "line1", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NotificationDto.prototype, "line2", void 0);
class CeremonyDto {
    show;
    date;
    time;
}
exports.CeremonyDto = CeremonyDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CeremonyDto.prototype, "show", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CeremonyDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CeremonyDto.prototype, "time", void 0);
class ReceptionDto {
    date;
    time;
    address;
}
exports.ReceptionDto = ReceptionDto;
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReceptionDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReceptionDto.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReceptionDto.prototype, "address", void 0);
class MapDto {
    show;
    link;
    locationName;
    locationAddress;
    latitude;
    longitude;
}
exports.MapDto = MapDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], MapDto.prototype, "show", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MapDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MapDto.prototype, "locationName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MapDto.prototype, "locationAddress", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MapDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MapDto.prototype, "longitude", void 0);
class MusicDto {
    enabled;
    url;
    name;
}
exports.MusicDto = MusicDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], MusicDto.prototype, "enabled", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MusicDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MusicDto.prototype, "name", void 0);
class WeddingDto {
    id;
    slug;
    ownerUserId;
    heroBannerUrl;
    templateCode;
    weddingDate;
    groom;
    bride;
    milestones;
    albumPhotos;
    notification;
    ceremony;
    reception;
    map;
    thankYouMessage;
    guestbookEnabled;
    bankAccounts;
    music;
    showAds;
    showLoveStory;
    createdAt;
}
exports.WeddingDto = WeddingDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "ownerUserId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "heroBannerUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "templateCode", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "weddingDate", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PersonDetailDto),
    __metadata("design:type", PersonDetailDto)
], WeddingDto.prototype, "groom", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PersonDetailDto),
    __metadata("design:type", PersonDetailDto)
], WeddingDto.prototype, "bride", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MilestoneDto),
    __metadata("design:type", Array)
], WeddingDto.prototype, "milestones", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => WeddingPhotoDto),
    __metadata("design:type", Array)
], WeddingDto.prototype, "albumPhotos", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => NotificationDto),
    __metadata("design:type", NotificationDto)
], WeddingDto.prototype, "notification", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CeremonyDto),
    __metadata("design:type", CeremonyDto)
], WeddingDto.prototype, "ceremony", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ReceptionDto),
    __metadata("design:type", ReceptionDto)
], WeddingDto.prototype, "reception", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MapDto),
    __metadata("design:type", MapDto)
], WeddingDto.prototype, "map", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "thankYouMessage", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WeddingDto.prototype, "guestbookEnabled", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BankAccountDto),
    __metadata("design:type", Array)
], WeddingDto.prototype, "bankAccounts", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MusicDto),
    __metadata("design:type", MusicDto)
], WeddingDto.prototype, "music", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WeddingDto.prototype, "showAds", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WeddingDto.prototype, "showLoveStory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WeddingDto.prototype, "createdAt", void 0);
//# sourceMappingURL=wedding.dto.js.map