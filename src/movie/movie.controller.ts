import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovieDto';

@Controller('movie')
export class MovieController {
    @Get()
    findAll() {
        return "Movie get Test";
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto) {
        return "Movie post Test"
    }

}

