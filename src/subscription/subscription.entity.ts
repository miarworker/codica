import {PrimaryColumn, OneToOne, JoinColumn, Unique, Entity, Column} from 'typeorm';
import {ServiceEntity} from "../service/service.entity";
import {UserEntity} from "../user/user.entity";

@Entity({name: 'subscription'})
@Unique("userId_serviceId", ["userId", "serviceId"]) // named; multiple fields
export class SubscriptionEntity {

    @PrimaryColumn({name: 'user_id', type: 'int', unique: false})
    userId: number;

    @PrimaryColumn({name: 'service_id', type: 'int', unique: false})
    serviceId: number;

    @Column({name: 'is_banned', nullable: true, type: 'boolean'})
    is_banned: boolean;

    @OneToOne(() => ServiceEntity)
    @JoinColumn()
    service: ServiceEntity;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;
}
