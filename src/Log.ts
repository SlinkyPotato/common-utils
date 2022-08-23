import EnvConstants from './EnvConstants';
import log, {
  Message,
  MessageCallback,
  MessageExtra,
} from 'gelf-pro';

try {
  if (EnvConstants.GRAYLOG_HOST) {
    log.setConfig({
      adapterName: EnvConstants.GRAYLOG_ADAPTER_NAME,
      adapterOptions: {
        host: EnvConstants.GRAYLOG_HOST,
        port: EnvConstants.GRAYLOG_PORT,
      },
    });
    
    if (EnvConstants.APP_ENV == 'local') {
      // eslint-disable-next-line no-console
      console.log('Logger initialized!');
    } else {
      log.message('Logger initialized!', 6);
    }
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e);
  throw new Error('Please setup a valid logging tool.');
}

const Log = {
  
  console(statement: Message): void {
    console.log(statement);
  },
  
  customLog(statement: Message, lvl: number, extra?: MessageExtra, callback?: MessageCallback, localCallback?: (message: Message) => void): void {
    try {
      if (EnvConstants.APP_ENV == 'local') {
        // eslint-disable-next-line no-console
        if (localCallback) {
          localCallback(statement);
        } else {
          console.log(statement);
        }
      } else {
        log.message(statement, lvl, extra, callback);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  info(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 6, extra, callback, console.info);
  },
  
  warn(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 4, extra, callback, console.warn);
  },
  
  debug(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 7, extra, callback, console.debug);
  },
  
  error(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 3, extra, callback, console.error);
  },
  
  fatal(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 0, extra, callback, console.error);
  },
  
  emergency(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 0, extra, callback, console.error);
  },
  
  alert(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 1, extra, callback, console.error);
  },
  
  critical(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 2, extra, callback, console.error);
  },
  
  trace(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 7, extra, callback);
  },
  
  notice(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    this.customLog(statement, 5, extra, callback);
  },
};

export default Log;
