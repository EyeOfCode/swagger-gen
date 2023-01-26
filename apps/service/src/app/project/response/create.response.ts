import { getSchemaPath } from '@nestjs/swagger';
import { Project } from '../entities/project.entity';

export const CreateAppResponse = {
  description: 'test create Project',
  type: Project,
  schema: {
    $ref: getSchemaPath(Project),
  },
};
