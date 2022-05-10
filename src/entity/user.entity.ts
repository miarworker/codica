import {PrimaryGeneratedColumn, Column, ManyToMany, Entity, JoinTable} from 'typeorm';
import {ServiceEntity} from "./service.entity";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 255, unique: true})
    name: string;

    @Column({type: "varchar", length: 255, unique: true})
    email: string;

    @ManyToMany(() => ServiceEntity, (service) => service.users)
    @JoinTable({
        name: "subscription",
        joinColumns: [{name: "user_id", referencedColumnName: "id"}],
        inverseJoinColumns: [{name: "service_id", referencedColumnName: "id"}]
    })
    services: ServiceEntity[];
}