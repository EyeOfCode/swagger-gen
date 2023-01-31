import { ApiProperty } from '@nestjs/swagger';

export class UploadResponse {
  @ApiProperty({
    example: 'Success!!',
  })
  message: string;
}

export const UploadAppResponse = {
  description: 'test upload message',
  type: UploadResponse,
};
