import { IsString, validateSync } from 'class-validator';

class EnvConstants {
    
    @IsString()
    APP_ENV: string;

    @IsString()
    LOG_DNA_APP_NAME: string;
    
    @IsString()
    LOG_DNA_TOKEN: string;
    
    @IsString()
    LOG_DNA_DEFAULT: string;
    
    constructor(config: EnvConstantsType) {
      this.APP_ENV = config.APP_ENV;
      this.LOG_DNA_APP_NAME = config.LOG_DNA_APP_NAME;
      this.LOG_DNA_TOKEN = config.LOG_DNA_TOKEN;
      this.LOG_DNA_DEFAULT = config.LOG_DNA_DEFAULT ?? 'info';
      
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
  LOG_DNA_APP_NAME: process.env.LOG_DNA_APP_NAME,
  LOG_DNA_TOKEN: process.env.LOG_DNA_TOKEN,
  LOG_DNA_DEFAULT: process.env.LOG_DNA_DEFAULT,
} as EnvConstantsType);

type EnvConstantsType = {
    APP_ENV: string;
    LOG_DNA_APP_NAME: string;
    LOG_DNA_TOKEN: string;
    LOG_DNA_DEFAULT: string;
}
