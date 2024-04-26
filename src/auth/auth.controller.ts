import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dto/UserDto';

@ApiTags('Auth User')
@Controller("login")

export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Body() req: UserDto) {
        return await this.authService.login(req);
    }
}
