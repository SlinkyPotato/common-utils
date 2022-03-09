import constants from '../constants';


describe('environment variables', () => {
  
  test('constants.env', () => {
    expect(constants.env).toBe('jest');
  });
  
  test('constants.logDNAToken', () => {
    expect(constants.logDNAToken).toBe('logDNAToken');
  });
  
  test('constants.logDNAAppName', () => {
    expect(constants.logDNAAppName).toBe('logDNAAppName');
  });
  
  test('constants.logDNADefault', () => {
    expect(constants.logDNADefault).toBe('DEBUG');
  });
  
  test('constants.sentryDSN', () => {
    expect(constants.sentryDSN).toBe('sentryDSN');
  });
});
