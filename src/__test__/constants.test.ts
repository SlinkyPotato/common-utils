import EnvConstants from '../EnvConstants';


describe('environment variables', () => {
  
  test('constants.env', () => {
    expect(EnvConstants.APP_ENV).toBe('jest');
  });
  
  test('constants.logDNAToken', () => {
    expect(EnvConstants.LOG_DNA_TOKEN).toBe('logDNAToken');
  });
  
  test('constants.logDNAAppName', () => {
    expect(EnvConstants.LOG_DNA_APP_NAME).toBe('logDNAAppName');
  });
  
  test('constants.logDNADefault', () => {
    expect(EnvConstants.LOG_DNA_DEFAULT).toBe('DEBUG');
  });
  
});
