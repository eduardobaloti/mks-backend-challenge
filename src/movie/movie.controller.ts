import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { MovieDto } from './dto/MovieDto';
import { MovieService } from './movie.service';
import { response } from 'express';
import { CacheInterceptor } from '@nestjs/cache-manager';


@UseInterceptors(CacheInterceptor)
@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    @Get()
    findAll() {
        return this.movieService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.movieService.findOne(id);
    }

    @Post()
    createMovie(@Body() createMovieDto: MovieDto) {
        if (createMovieDto.year.toString().length != 4) return response.status(HttpStatus.BAD_REQUEST).send('Invalid Year');
        return this.movieService.create(createMovieDto);
    }

    @Put(":id")
    editMovie(@Param("id") id: number, @Body() editMovieDto: MovieDto) {
        if (editMovieDto.year.toString().length != 4) return response.status(HttpStatus.BAD_REQUEST).send('Invalid Year');
        return this.movieService.edit(id, editMovieDto);
    }

    @Delete(":id")
    deleteMovie(@Param("id") id: number) {
        return this.movieService.delete(id);

    }
}

