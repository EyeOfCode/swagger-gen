import { Injectable } from '@nestjs/common';
import { CreateWhitelistDto } from './dto/create-whitelist.dto';
import { UpdateWhitelistDto } from './dto/update-whitelist.dto';

@Injectable()
export class WhitelistService {
  create(createWhitelistDto: CreateWhitelistDto) {
    return 'This action adds a new whitelist';
  }

  findAll() {
    return `This action returns all whitelist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whitelist`;
  }

  update(id: number, updateWhitelistDto: UpdateWhitelistDto) {
    return `This action updates a #${id} whitelist`;
  }

  remove(id: number) {
    return `This action removes a #${id} whitelist`;
  }
}
