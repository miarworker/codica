import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {UserEntity} from "./user.entity";
import {ServiceModule} from "../service/service.module";
import {SubscriptionModule} from "../subscription/subscription.module";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), ServiceModule, SubscriptionModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [TypeOrmModule]
})
export class UserModule {
}
