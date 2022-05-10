import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubscriptionEntity} from "./subscription.entity";

@Module({
    imports: [TypeOrmModule.forFeature([SubscriptionEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})
export class SubscriptionModule {
}
