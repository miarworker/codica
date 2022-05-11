import {PrimaryColumn, OneToOne, Unique, Entity, Column} from 'typeorm';
import {ServiceEntity} from "../service/service.entity";
import {UserEntity} from "../user/user.entity";

@Entity({name: 'subscription'})
@Unique("userId_serviceId", ["userId", "serviceId"]) // named; multiple fields
export class SubscriptionEntity {

    @PrimaryColumn({name: 'user_id', type: 'int', unique: false, generated:false})
    @OneToOne(() => UserEntity)
    userId: number;

    @PrimaryColumn({name: 'service_id', type: 'int', unique: false, generated:false})
    @OneToOne(() => ServiceEntity)
    serviceId: number;

    @Column({name: 'is_banned', nullable: true, type: 'boolean'})
    isBanned: boolean;
}
