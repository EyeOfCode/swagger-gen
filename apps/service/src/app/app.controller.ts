import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { CreateAppDto } from './dto/create-app.dto';
import { CreateAppResponse } from './response/create.response';
import { GetListResponse, GetResponse } from './response/get.response';

@ApiTags('App')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse(GetListResponse)
  async getData() {
    return this.appService.find();
  }

  @Get('/:id')
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse(GetResponse)
  async getDataById(@Param() id: string) {
    return this.appService.findById(id);
  }

  @Post()
  @ApiOkResponse(CreateAppResponse)
  createData(@Body() data: CreateAppDto) {
    return this.appService.create(data);
  }
}
