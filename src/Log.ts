import logdna, { Logger, LogOptions } from '@logdna/logger';
import EnvConstants from './EnvConstants';

let logger: Logger | null;

try {
  if (EnvConstants.LOG_DNA_TOKEN) {
    logger = logdna.createLogger(EnvConstants.LOG_DNA_TOKEN, {
      app: EnvConstants.LOG_DNA_APP_NAME,
      level: EnvConstants.LOG_DNA_DEFAULT,
    });
    if (EnvConstants.APP_ENV != 'production' || !logger.info) {
      // eslint-disable-next-line no-console
      console.log('Logger initialized!');
    } else {
      logger.log('Logger initialized!');
    }
  } else {
    logger = null;
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e);
  throw new Error('Please setup valid LogDNA tokens.');
}

const Log = {
  
  logger: logger,
  
  info(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger || !logger.info) {
        // eslint-disable-next-line no-console
        console.log(statement);
      } else {
        logger.info(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  warn(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger || !logger.warn) {
        // eslint-disable-next-line no-console
        console.warn(statement);
      } else {
        logger.warn(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  debug(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger || !logger.debug) {
        // eslint-disable-next-line no-console
        console.debug(statement);
      } else {
        logger.debug(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  error(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger || !logger.error) {
        // eslint-disable-next-line no-console
        console.error(statement);
      } else {
        logger.error(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  fatal(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger || !logger.fatal) {
        // eslint-disable-next-line no-console
        console.error(statement);
      } else {
        logger.fatal(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  trace(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger || !logger.trace) {
        // eslint-disable-next-line no-console
        console.log(statement);
      } else {
        logger.trace(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  log(statement: string | object, options?: Omit<LogOptions, 'level'>): void {
    try {
      if (EnvConstants.APP_ENV != 'production' || !logger) {
        // eslint-disable-next-line no-console
        console.log(statement);
      } else {
        logger.log(statement, options);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  addMetaProperty(key: string, value: string | number | boolean | object): void {
    try {
      if (logger) {
        logger.addMetaProperty(key, value);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  removeMetaProperty(key: string): void {
    try {
      if (logger) {
        logger.removeMetaProperty(key);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  flush(): void {
    try {
      if (logger) {
        logger.flush();
      }
    } catch(e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
};

export default Log;
