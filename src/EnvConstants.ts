import {
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

type EnvConstantsType = {
  APP_ENV: string;
  SENTRY_IO_DSN: string;
  GRAYLOG_HOST: string;
  GRAYLOG_PORT: number;
  GRAYLOG_ADAPTER_NAME: 'tcp-tls' | 'tcp' | 'udp';
}

class EnvConstants {
    
    @IsString()
    APP_ENV: string;
    
    @IsString()
    GRAYLOG_HOST: string;
    
    @IsNumber()
    GRAYLOG_PORT: number;
  
    @IsString()
    GRAYLOG_ADAPTER_NAME: 'tcp-tls' | 'tcp' | 'udp';
    
    @IsString()
    SENTRY_IO_DSN: string;
    
    constructor(config: EnvConstantsType) {
      this.APP_ENV = config.APP_ENV;
      this.SENTRY_IO_DSN = config.SENTRY_IO_DSN;
      this.GRAYLOG_HOST = config.GRAYLOG_HOST;
      this.GRAYLOG_PORT = config.GRAYLOG_PORT;
      this.GRAYLOG_ADAPTER_NAME = config.GRAYLOG_ADAPTER_NAME;
      
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
  GRAYLOG_PORT: Number(process.env.GRAYLOG_PORT),
  GRAYLOG_ADAPTER_NAME: process.env.GRAYLOG_ADAPTER_NAME,
} as EnvConstantsType);
