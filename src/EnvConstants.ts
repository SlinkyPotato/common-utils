import {
  IsBoolean,
  IsBooleanString,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

type EnvConstantsType = {
  APP_ENV: string;
  SENTRY_IO_DSN: string;
  GRAYLOG_HOST: string | undefined;
  GRAYLOG_PORT: number | undefined;
  GRAYLOG_ADAPTER_NAME: 'tcp-tls' | 'tcp' | 'udp' | undefined;
  GRAYLOG_APP_NAME: string | undefined;
  LOG_TO_CONSOLE: string  | undefined;
}

class EnvConstants {
    
    @IsString()
    APP_ENV: string;
  
    @IsOptional()
    @IsString()
    GRAYLOG_HOST: string | undefined;
  
    @IsOptional()
    @IsNumber()
    GRAYLOG_PORT: number | undefined;
  
    @IsOptional()
    @IsString()
    GRAYLOG_ADAPTER_NAME: 'tcp-tls' | 'tcp' | 'udp' | undefined;
  
    @IsOptional()
    @IsString()
    GRAYLOG_APP_NAME: string | undefined;
    
    @IsString()
    SENTRY_IO_DSN: string;
    
    @IsOptional()
    @IsBooleanString()
    LOG_TO_CONSOLE: string | undefined;
    
    constructor(config: EnvConstantsType) {
      this.APP_ENV = config.APP_ENV;
      this.SENTRY_IO_DSN = config.SENTRY_IO_DSN;
      this.GRAYLOG_HOST = config.GRAYLOG_HOST;
      this.GRAYLOG_PORT = Number(config.GRAYLOG_PORT);
      this.GRAYLOG_ADAPTER_NAME = config.GRAYLOG_ADAPTER_NAME;
      this.GRAYLOG_APP_NAME = config.GRAYLOG_APP_NAME;
      this.LOG_TO_CONSOLE = config.LOG_TO_CONSOLE;
      
      const errors = validateSync(this);
      errors.forEach((error) => {
        console.error(`[!] The following env variable is either missing or did not pass validation: ${JSON.stringify(error?.constraints)}`);
      });

      if (Array.isArray(errors) && errors.length > 0) {
        throw new Error('Missing environment variables, please refer to logs above to ensure required variables are set.');
      }
    }
}

export default new EnvConstants({
  APP_ENV: process.env.APP_ENV,
  SENTRY_IO_DSN: process.env.SENTRY_IO_DSN,
  GRAYLOG_HOST: process.env.GRAYLOG_HOST,
  GRAYLOG_PORT: process.env.GRAYLOG_PORT,
  GRAYLOG_ADAPTER_NAME: process.env.GRAYLOG_ADAPTER_NAME,
  GRAYLOG_APP_NAME: process.env.GRAYLOG_APP_NAME,
  LOG_TO_CONSOLE: process.env.LOG_TO_CONSOLE,
} as EnvConstantsType);
