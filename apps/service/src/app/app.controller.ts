import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { AppService } from './app.service';
import { CreateAppDto } from './dto/create-app.dto';
import { CreateAppResponse } from './response/create.response';
import { GetListResponse, GetResponse } from './response/get.response';
import { RemoveAppResponse } from './response/remove.response';

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
  @ApiBearerAuth()
  @ApiOkResponse(CreateAppResponse)
  async createData(@Body() data: CreateAppDto) {
    return this.appService.create(data);
  }

  // TODO you can move to middleware check auth guard
  @Delete()
  @ApiBearerAuth()
  @ApiOkResponse(RemoveAppResponse)
  async removeData(@Headers() headers: any) {
    await this.appService.removeAll();
    return { message: `Success token ${headers.authorization}!!` };
  }
}
