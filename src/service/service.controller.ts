import {Body, Controller, Get, Post} from '@nestjs/common';
import {ServiceService} from "./service.service";
import {ServiceEntity} from "./service.entity";
import {AutoCompeteDto} from "./dto/auto-compete.dto";

@Controller('services')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) {
    }

    @Get('/')
    findAll(): Promise<ServiceEntity[]> {
        return this.serviceService.findAll();
    }

    @Get('/sort')
    findAllAndSort(): Promise<ServiceEntity[]> {
        return this.serviceService.findAllAndSort();
    }

    @Post('/complete')
    autoComplete(@Body() autoCompleteDto: AutoCompeteDto): Promise<ServiceEntity[]> {
        return this.serviceService.autoComplete(autoCompleteDto);
    }

}
