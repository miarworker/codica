import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

}
