import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserDto } from 'src/dto/UserDto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) { }

    async create(userDto: UserDto) {
        const user = this.userRepository.create(userDto);
        await this.userRepository.save(user);
        return user;
    }

    async find(username: string) {
        const user = await this.userRepository.findOne(
            {
                where:
                    { username: username }
            }
        );
        return user;
    }
}
