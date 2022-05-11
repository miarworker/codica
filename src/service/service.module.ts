import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ServiceEntity} from "./service.entity";
import {ServiceController} from './service.controller';
import {ServiceService} from './service.service';
import {SubscriptionModule} from "../subscription/subscription.module";

@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity]), SubscriptionModule],
    controllers: [ServiceController],
    providers: [ServiceService],
    exports: [TypeOrmModule]
})
export class ServiceModule {
}
