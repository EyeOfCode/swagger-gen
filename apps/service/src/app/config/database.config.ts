import { registerAs } from '@nestjs/config';
import * as yup from 'yup';
import { validationOptions } from './validation.options';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export interface responseConfig {
  uri: string;
  dbName: string;
  user: string;
  pass: string;
}

export interface DbConfig {
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;
}

const SCHEMA = yup.object({
  DB_HOST: yup.string().required(),
  DB_NAME: yup.string().required(),
  DB_USER: yup.string().optional(),
  DB_PASS: yup.string().optional(),
});

export default registerAs('db', async (): Promise<responseConfig> => {
  const env = await SCHEMA.validate(process.env);

  let value: DbConfig;
  try {
    value = SCHEMA.validateSync(env, validationOptions);
  } catch (error) {
    throw Error('ENV validation failed – DB: ' + error.errors);
  }
  return {
    uri: value.DB_HOST,
    dbName: value.DB_NAME,
    user: value.DB_USER,
    pass: value.DB_PASS,
  };
});
