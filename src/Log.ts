import EnvConstants from './EnvConstants';
import log, {
  Message,
  MessageCallback,
  MessageExtra,
} from 'gelf-pro';

try {
  if (EnvConstants.GRAYLOG_HOST) {
    log.setConfig({
      fields: {
        app: EnvConstants.GRAYLOG_APP_NAME,
      },
      adapterName: EnvConstants.GRAYLOG_ADAPTER_NAME,
      adapterOptions: {
        host: EnvConstants.GRAYLOG_HOST,
        port: EnvConstants.GRAYLOG_PORT,
      },
    });
    log.message('Logger initialized!', 6);
  }
  // default logging to console
  if (!EnvConstants.LOG_TO_CONSOLE) {
    // eslint-disable-next-line no-console
    console.log('Logger initialized!');
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e);
  throw new Error('Please setup a valid logging tool.');
}

const Log = {
  
  /**
   * Local console.log
   * @param statement
   */
  console(statement: Message): void {
    console.log(statement);
  },
  
  /**
   * Log.customLog that allows for a combination of logging between local and gelf-pro
   * @param statement
   * @param lvl
   * @param extra
   * @param callback
   * @param localCallback
   */
  customLog(statement: Message, lvl: number, extra?: MessageExtra, callback?: MessageCallback, localCallback?: (message: Message) => void): void {
    try {
      if (!EnvConstants.LOG_TO_CONSOLE) {
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
  
  /**
   * Console.info
   * level: 6
   * @param statement
   * @param extra
   * @param callback
   */
  info(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 6, extra, callback, console.info);
  },
  
  /**
   * Console.warn
   * level: 4
   * @param statement
   * @param extra
   * @param callback
   */
  warn(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 4, extra, callback, console.warn);
  },
  
  /**
   * Console.debug
   * level: 7
   * @param statement
   * @param extra
   * @param callback
   */
  debug(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 7, extra, callback, console.debug);
  },
  
  /**
   * Console.error
   * level: 3
   * @param statement
   * @param extra
   * @param callback
   */
  error(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 3, extra, callback, console.error);
  },
  
  /**
   * Console.fatal
   * level: 0
   * @param statement
   * @param extra
   * @param callback
   */
  fatal(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 0, extra, callback, console.error);
  },
  
  /**
   * Console.emergency
   * level: 0
   * @param statement
   * @param extra
   * @param callback
   */
  emergency(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 0, extra, callback, console.error);
  },
  
  /**
   * Console.alert
   * level: 1
   * @param statement
   * @param extra
   * @param callback
   */
  alert(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 1, extra, callback, console.error);
  },
  
  /**
   * Console.critical
   * level: 2
   * @param statement
   * @param extra
   * @param callback
   */
  critical(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 2, extra, callback, console.error);
  },
  
  /**
   * Console.trace
   * level: 7
   * @param statement
   * @param extra
   * @param callback
   */
  trace(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 7, extra, callback);
  },
  
  /**
   * Console.notice
   * level: 5
   * @param statement
   * @param extra
   * @param callback
   */
  notice(statement: Message, extra?: MessageExtra, callback?: MessageCallback): void {
    Log.customLog(statement, 5, extra, callback);
  },
};

export default Log;
