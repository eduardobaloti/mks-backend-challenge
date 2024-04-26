import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/UserDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Create User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() userDto: UserDto) {
        return await this.userService.create(userDto)
    }
}
