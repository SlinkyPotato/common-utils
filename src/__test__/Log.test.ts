import Log from '../Log';
import logdna from '@logdna/logger';

describe('Common Log ', () => {
  
  beforeAll(() => {
    // const logdnaSpy = jest.spyOn(logdna, 'createLogger');
    // const logdnaMock = jest.createMockFromModule('@logdna/logger');
    // logdnaSpy.mockImplementation((_: string, __?: ConstructorOptions ) => {
    //   return {} as Logger;
    // });
  });
  
  afterAll(() => {
    const logdnaSpy = jest.spyOn(logdna, 'createLogger');
    logdnaSpy.mockRestore();
  });
  
  test('Log.info', () => {
    const logSpy = jest.spyOn(Log, 'info');
    const consoleSpy = jest.spyOn(console, 'log');
    
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
  
  test('Log.log', () => {
    const logSpy = jest.spyOn(Log, 'log');
    const consoleSpy = jest.spyOn(console, 'log');
    
    Log.log('test Log.log');
    
    expect(logSpy).toHaveBeenCalledWith('test Log.log');
    expect(consoleSpy.mock.calls.length).toBe(1);
    consoleSpy.mockClear();
  });
  
  test('Log.addMetaProperty', () => {
    const logSpy = jest.spyOn(Log, 'addMetaProperty');
    Log.addMetaProperty('testKey', 'testValue');
    expect(logSpy).toHaveBeenCalledWith('testKey', 'testValue');
    logSpy.mockClear();
  });
  
  test('Log.removeMetaProperty', () => {
    const logSpy = jest.spyOn(Log, 'removeMetaProperty');
    Log.removeMetaProperty('testRemoveKey');
    expect(logSpy).toHaveBeenCalledWith('testRemoveKey');
  });
  
  test('Log.flush', () => {
    const logSpy = jest.spyOn(Log, 'flush');
    Log.flush();
    expect(logSpy).toHaveBeenCalledWith();
    logSpy.mockClear();
  });

});
