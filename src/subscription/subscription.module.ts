import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubscriptionEntity} from "./subscription.entity";
import {SubscriptionService} from './subscription.service';

@Module({
    imports: [TypeOrmModule.forFeature([SubscriptionEntity])],
    controllers: [],
    providers: [SubscriptionService],
    exports: [TypeOrmModule, SubscriptionService]
})
export class SubscriptionModule {
}
