import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {ServiceEntity} from "../service/service.entity";
import {SubscriptionEntity} from "../subscription/subscription.entity";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
                @InjectRepository(ServiceEntity) private servicesRepository: Repository<ServiceEntity>,
                @InjectRepository(SubscriptionEntity) private subscriptionRepository: Repository<SubscriptionEntity>) {
    }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne(id, {relations: ['services']});
    }

    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        let userEntity = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(userEntity);
    }

    findServicesByUserId(id: number): Promise<ServiceEntity[]> {
        return this.usersRepository.findOne(id, {relations: ['services']}).then(user => user.services);
    }

    async createSubscription(userId: number, serviceId: number): Promise<UserEntity> {
        let subscription = new SubscriptionEntity();
        subscription.serviceId = serviceId;
        subscription.userId = userId;

        await this.subscriptionRepository.createQueryBuilder()
            .insert()
            .values(subscription)
            .orIgnore()
            .execute();

        return this.usersRepository.findOne(userId, {relations: ['services']});
    }
}