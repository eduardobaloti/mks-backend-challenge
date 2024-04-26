import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entities/user.entity';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService

    ) { }

    async login(user) {
        const payload = { username: user.username, password: user.password };
        return { token: this.jwtService.sign(payload) }
    }

    async validateUser(username: string, password: string) {
        let signUser: User;
        try {
            signUser = await this.userService.find(username)
        } catch (error) {
            return null;
        }
        if (signUser === null) return null;
        const isPasswordValid = await compareSync(password, signUser.password)
        if (!isPasswordValid) return null;
        return signUser
    }
}
