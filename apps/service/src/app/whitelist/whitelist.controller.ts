import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { WhitelistService } from './whitelist.service';
import { CreateWhitelistDto } from './dto/create-whitelist.dto';
import { UpdateWhitelistDto } from './dto/update-whitelist.dto';
import { ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import 'multer';
import { ApiMultiFile } from './decorator/upload.decorator';
import { UploadAppResponse } from './response/get.response';

@ApiTags('WhiteList')
@Controller('whitelist')
export class WhitelistController {
  constructor(private readonly whitelistService: WhitelistService) {}

  @Post()
  create(@Body() createWhitelistDto: CreateWhitelistDto) {
    return this.whitelistService.create(createWhitelistDto);
  }

  @ApiTags('Generate')
  @Post('/upload')
  @ApiConsumes('multipart/form-data')
  @ApiMultiFile()
  @UseInterceptors(FilesInterceptor('files', 5))
  @ApiOkResponse(UploadAppResponse)
  upload(
    @UploadedFiles()
    files: Express.Multer.File[]
  ) {
    console.log(files);
    return { message: 'success' };
  }

  @Get()
  findAll() {
    return this.whitelistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whitelistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWhitelistDto: UpdateWhitelistDto
  ) {
    return this.whitelistService.update(+id, updateWhitelistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whitelistService.remove(+id);
  }
}
