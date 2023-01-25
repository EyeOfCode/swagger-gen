import { getSchemaPath } from '@nestjs/swagger';
import { App } from '../entities/app.entity';

export const CreateAppResponse = {
  description: 'test create app',
  type: App,
  schema: {
    $ref: getSchemaPath(App),
  },
};
