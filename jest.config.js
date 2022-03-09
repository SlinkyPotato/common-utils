/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

/**
 * Environment Variables Test
 */
process.env.APP_ENV = 'jest';
process.env.LOGDNA_TOKEN = 'logDNAToken';
process.env.LOGDNA_APP_NAME = 'logDNAAppName';
process.env.LOGDNA_DEFAULT_LEVEL = 'DEBUG';
process.env.SENTRY_IO_DSN = 'sentryDSN';
