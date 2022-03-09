import logdna, { Logger, LogOptions } from '@logdna/logger';
import constants from './constants';

let logger: Logger;
if (!constants.logDNAToken) {
  throw new Error('Please set logdna token');
}

try {
  logger = logdna.createLogger(constants.logDNAToken, {
    app: constants.logDNAAppName,
    level: constants.logDNADefault,
  });
  if (constants.env != 'production' || !logger.info) {
    // eslint-disable-next-line no-console
    console.log('Logger initialized!');
  } else {
    logger.log('Logger initialized!');
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
      if (constants.env != 'production' || !logger.info) {
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
      if (constants.env != 'production' || !logger.warn) {
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
      if (constants.env != 'production' || !logger.debug) {
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
      if (constants.env != 'production' || !logger.error) {
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
      if (constants.env != 'production' || !logger.fatal) {
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
      if (constants.env != 'production' || !logger.trace) {
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
      if (constants.env != 'production') {
        // eslint-disable-next-line no-console
        console.log(statement);
      }
      logger.log(statement);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  addMetaProperty(key: string, value: string | number | boolean | object): void {
    try {
      logger.addMetaProperty(key, value);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  removeMetaProperty(key: string): void {
    try {
      logger.removeMetaProperty(key);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  flush(): void {
    try {
      logger.flush();
    } catch(e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
};

export default Log;
