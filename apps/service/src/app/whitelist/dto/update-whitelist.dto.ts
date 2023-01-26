import { PartialType } from '@nestjs/mapped-types';
import { CreateWhitelistDto } from './create-whitelist.dto';

export class UpdateWhitelistDto extends PartialType(CreateWhitelistDto) {}
