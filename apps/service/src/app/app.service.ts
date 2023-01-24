import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to service!' };
  }

  createData(data: any) {
    return data;
  }
}
