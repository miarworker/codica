import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from './user/user.module';
import {ServiceModule} from './service/service.module';
import {SubscriptionModule} from './subscription/subscription.module';

@Module({
    imports: [UserModule, ServiceModule, SubscriptionModule, TypeOrmModule.forRoot()],
})
export class AppModule {
}
