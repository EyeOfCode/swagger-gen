import { getSchemaPath } from '@nestjs/swagger';
import { App } from '../entities/app.entity';

export const GetListResponse = {
  description: 'test get app',
  type: App,
  isArray: true,
  schema: {
    $ref: getSchemaPath(App),
  },
};

export const GetResponse = {
  description: 'test get app',
  type: App,
  schema: {
    $ref: getSchemaPath(App),
  },
};
