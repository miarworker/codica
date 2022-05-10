import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('service')
export class ServiceEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', nullable: false, length: 255, unique: true})
    title: string;

    @Column({type: 'text', nullable: false})
    description: string;

    @ManyToMany(() => UserEntity, (user) => user.services)
    @JoinTable({
        name: "subscription",
        joinColumns: [{name: "service_id", referencedColumnName: "id"}],
        inverseJoinColumns: [{name: "user_id", referencedColumnName: "id"}]
    })
    users: UserEntity[];
}