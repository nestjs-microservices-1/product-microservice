import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATA_BASE_URL: string;
}
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    DATA_BASE_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const envVars: EnvVars = value;

export const envs = {
  PORT: envVars.PORT || 3000,
  DATABASERURL: envVars.DATA_BASE_URL,
};
