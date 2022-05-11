import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ServiceService} from "./service.service";
import {ServiceEntity} from "./service.entity";
import {AutoCompeteDto} from "./dto/auto-compete.dto";
import {SubscriptionService} from "../subscription/subscription.service";

@Controller('services')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService,
                private readonly subscriptionService: SubscriptionService) {
    }

    @Get('/')
    findAll(): Promise<ServiceEntity[]> {
        return this.serviceService.findAll();
    }

    @Get('/:id')
    findById(@Param(':id') id: number): Promise<ServiceEntity> {
        return this.serviceService.findById(id);
    }

    @Get('/sort')
    findAllAndSort(): Promise<ServiceEntity[]> {
        return this.serviceService.findAllAndSort();
    }

    @Get(':serviceId/ban/:userId')
    async banByUserId(@Param('serviceId') serviceId: number,
                      @Param('userId') userId: number): Promise<ServiceEntity> {
        await this.subscriptionService.banByUserId(serviceId, userId);
        return this.serviceService.findById(serviceId);
    }

    @Post('/complete')
    autoComplete(@Body() autoCompleteDto: AutoCompeteDto): Promise<ServiceEntity[]> {
        return this.serviceService.autoComplete(autoCompleteDto);
    }

}
