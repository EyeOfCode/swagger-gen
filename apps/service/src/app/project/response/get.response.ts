import { getSchemaPath } from '@nestjs/swagger';
import { Project } from '../entities/project.entity';

export const GetListResponse = {
  description: 'test get Project',
  type: Project,
  isArray: true,
  schema: {
    $ref: getSchemaPath(Project),
  },
};

export const GetResponse = {
  description: 'test get Project',
  type: Project,
  schema: {
    $ref: getSchemaPath(Project),
  },
};
