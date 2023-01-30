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

import { ProjectService } from './project.service';
import { CreateAppDto } from './dto/create-app.dto';
import { CreateAppResponse } from './response/create.response';
import { GetListResponse, GetResponse } from './response/get.response';
import { RemoveAppResponse } from './response/remove.response';

@ApiTags('Project', 'Generate')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @ApiOkResponse(GetListResponse)
  async getData() {
    return this.projectService.find();
  }

  @Get('/:id')
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse(GetResponse)
  async getDataById(@Param() id: string) {
    return this.projectService.findById(id);
  }

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse(CreateAppResponse)
  async createData(@Body() data: CreateAppDto) {
    return this.projectService.create(data);
  }

  // TODO you can move to middleware check auth guard
  @Delete()
  @ApiBearerAuth()
  @ApiOkResponse(RemoveAppResponse)
  async removeData(@Headers() headers: any) {
    await this.projectService.removeAll();
    return { message: `Success token '${headers.authorization}'!!` };
  }
}
