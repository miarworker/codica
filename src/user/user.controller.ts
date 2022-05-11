import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";
import {ServiceEntity} from "../service/service.entity";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('/')
    findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getOneById(@Param('id') id: number): Promise<UserEntity> {
        return this.userService.findOne(id);
    }

    @Get(':id/services')
    findEntriesByCategory(@Param('id') id: number): Promise<ServiceEntity[]> {
        return this.userService.findServicesByUserId(id);
    }

    @Get(':userId/subscribe/:serviceId')
    async createSubscription(@Param('userId') userId: number,
                             @Param('serviceId') serviceId: number)
        : Promise<UserEntity> {
        return this.userService.createSubscription(userId, serviceId);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.create(createUserDto);
    }
}
