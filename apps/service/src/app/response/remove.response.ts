import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse {
  @ApiProperty({
    example: 'Success!!',
  })
  message: string;
}

export const RemoveAppResponse = {
  description: 'test remove app',
  type: SuccessResponse,
};
