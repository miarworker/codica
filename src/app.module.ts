import {Module} from "@nestjs/common";
import {UserModule} from './user/user.module';
import {ServiceModule} from './service/service.module';
import {SubscriptionModule} from './subscription/subscription.module';
import {DbModule} from "./db/db.module";

@Module({
    imports: [UserModule, ServiceModule, SubscriptionModule, DbModule],
})
export class AppModule {
}
