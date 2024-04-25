import { IsNumber, IsString, Length, MaxLength, maxLength } from "class-validator";

export class MovieDto {
    @IsString()
    @MaxLength(128)
    title: string;
    @IsString()
    @MaxLength(32)
    genre: string
    @IsNumber()
    year: number;
    @IsString()
    @MaxLength(128)
    director: string;
}