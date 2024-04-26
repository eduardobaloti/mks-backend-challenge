import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, isString, IsString, isStrongPassword, Length, MaxLength, maxLength } from "class-validator";

export class UserDto {
    @IsString()
    @MaxLength(32)
    @ApiProperty()
    username: string;

    @IsString()
    @MaxLength(64)
    @ApiProperty()
    password: string
}