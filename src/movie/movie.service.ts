import { Inject, Injectable } from '@nestjs/common';
import { MovieDto } from '../dto/MovieDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie) private readonly movieRepo: Repository<Movie>,
        @Inject('CACHE_MANAGER') private cacheManager: Cache
    ) { }

    async findOne(id: number) {
        const movie = await this.movieRepo.findOne({ where: { id: id } });
        return movie;
    }

    async findAll() {
        const movies = await this.movieRepo.find();
        return movies;
    }

    async create(movieDto: MovieDto) {
        const movie = await this.movieRepo.create(movieDto)
        return await this.movieRepo.save(movie);
    }

    async edit(id: number, movieDto: MovieDto) {
        return await this.movieRepo.update(id, movieDto)
    }

    async delete(id: number) {
        await this.movieRepo.delete({ id });
        return { message: 'Movie ' + id + ' deleted' };
    }
}
