import Log from '../Log';
import log, {
  Message,
} from 'gelf-pro';

describe('Common Log ', () => {
  let loggerSpy: jest.SpyInstance;
  
  beforeAll(() => {
    loggerSpy = jest.spyOn(log, 'setConfig');
    loggerSpy.mockImplementation(() => {
      return {
        notice: (statement: Message) => {
          console.log(statement);
        },
        info(statement: Message) {
          console.log(statement);
        },
        warn(statement: Message) {
          console.log(statement);
        },
        debug(statement: Message) {
          console.log(statement);
        },
        error(statement: Message) {
          console.log(statement);
        },
        fatal(statement: Message) {
          console.log(statement);
        },
        emergency(statement: Message) {
          console.log(statement);
        },
        alert(statement: Message) {
          console.log(statement);
        },
        critical(statement: Message) {
          console.log(statement);
        },
        trace(statement: Message) {
          console.log(statement);
        },
      };
    });
  });
  
  afterAll(() => {
    loggerSpy.mockRestore();
  });
  
  test('Log.info', () => {
    const logSpy = jest.spyOn(Log, 'info');
    const consoleSpy = jest.spyOn(console, 'info');
    
    Log.info('test Log.info');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.info');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.warn', () => {
    const logSpy = jest.spyOn(Log, 'warn');
    const consoleSpy = jest.spyOn(console, 'warn');
    
    Log.warn('test Log.warn');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.warn');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.debug', () => {
    const logSpy = jest.spyOn(Log, 'debug');
    const consoleSpy = jest.spyOn(console, 'debug');
    
    Log.debug('test Log.debug');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.debug');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.error', () => {
    const logSpy = jest.spyOn(Log, 'error');
    const consoleSpy = jest.spyOn(console, 'error');
    
    Log.error('test Log.error');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.error');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.fatal', () => {
    const logSpy = jest.spyOn(Log, 'fatal');
    const consoleSpy = jest.spyOn(console, 'error');
    
    Log.fatal('test Log.fatal');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.fatal');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.trace', () => {
    const logSpy = jest.spyOn(Log, 'trace');
    const consoleSpy = jest.spyOn(console, 'log');
    
    Log.trace('test Log.trace');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.trace');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.notice', () => {
    const logSpy = jest.spyOn(Log, 'notice');
    const consoleSpy = jest.spyOn(console, 'log');
    
    Log.notice('test Log.log');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.log');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });

});
