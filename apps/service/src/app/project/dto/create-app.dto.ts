import { ApiProperty } from '@nestjs/swagger';

export class CreateAppDto {
  @ApiProperty()
  name: string;
}
