import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {SubscriptionEntity} from "./subscription.entity";

@Injectable()
export class SubscriptionService {
    constructor(@InjectRepository(SubscriptionEntity) private readonly subscriptionRepository: Repository<SubscriptionEntity>,) {
    }

    async banByUserId(serviceId: number, userId: number) {
        return this.subscriptionRepository.update({userId, serviceId}, {isBanned: true});
    }
}
