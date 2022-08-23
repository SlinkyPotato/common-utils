import EnvConstants from '../EnvConstants';


describe('environment variables', () => {
  
  test('constants.env', () => {
    expect(EnvConstants.APP_ENV).toBe('local');
  });
  
  test('constants.GRAYLOG_HOST', () => {
    expect(EnvConstants.GRAYLOG_HOST).toBe('graylogHost');
  });
  
  test('constants.GRAYLOG_PORT', () => {
    expect(EnvConstants.GRAYLOG_PORT).toBe(0);
  });
  
  test('constants.GRAYLOG_ADAPTER_NAME', () => {
    expect(EnvConstants.GRAYLOG_ADAPTER_NAME).toBe('udp');
  });
  
  test('constants.GRAYLOG_APP_NAME', () => {
    expect(EnvConstants.GRAYLOG_APP_NAME).toBe('common-utils');
  });
  
  test('constants.sentryDSN', () => {
    expect(EnvConstants.SENTRY_IO_DSN).toBe('sentryDSN');
  });
});
