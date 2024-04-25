import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/MovieDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/entities/movie.entity';

@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private readonly movieRepo: Repository<Movie>) { }

    async findOne(id: number) {
        return await this.movieRepo.findOne({ where: { id: id } });
    }

    async findAll() {
        return await this.movieRepo.find();
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
