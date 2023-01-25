import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WhitelistService } from './whitelist.service';
import { CreateWhitelistDto } from './dto/create-whitelist.dto';
import { UpdateWhitelistDto } from './dto/update-whitelist.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WhiteList')
@Controller('whitelist')
export class WhitelistController {
  constructor(private readonly whitelistService: WhitelistService) {}

  @Post()
  create(@Body() createWhitelistDto: CreateWhitelistDto) {
    return this.whitelistService.create(createWhitelistDto);
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
