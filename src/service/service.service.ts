import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ServiceEntity} from "./service.entity";
import {Repository} from "typeorm";
import {AutoCompeteDto} from "./dto/auto-compete.dto";

@Injectable()
export class ServiceService {
    constructor(@InjectRepository(ServiceEntity) private readonly serviceRepository: Repository<ServiceEntity>) {
    }

    findAll(): Promise<ServiceEntity[]> {
        return this.serviceRepository.find();
    }

    findAllAndSort(): Promise<ServiceEntity[]> {
        return this.serviceRepository.query(`select service.*, count(*) subscriptions_count
                                             from service
                                                      INNER JOIN subscription on service.id = subscription.service_id
                                                      INNER JOIN "user" on "user".id = subscription.user_id
                                             GROUP BY service.id
                                             ORDER BY subscriptions_count DESC `);
    }

    autoComplete(autoCompleteDto: AutoCompeteDto) {
        let term = autoCompleteDto.term.toLocaleLowerCase();
        return this.findAllAndSort().then(serviceEntities =>
            serviceEntities.filter(serviceEntity =>
                serviceEntity.title.toLocaleLowerCase().indexOf(term) !== -1))
    }
}
