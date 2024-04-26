import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length, MaxLength, maxLength } from "class-validator";

export class MovieDto {
    @IsString()
    @MaxLength(128)
    @ApiProperty()
    title: string;

    @IsString()
    @MaxLength(32)
    @ApiProperty()
    genre: string

    @IsNumber()
    @ApiProperty()
    year: number;

    @IsString()
    @MaxLength(128)
    @ApiProperty()
    director: string;
}