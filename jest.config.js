/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

/**
 * Environment Variables Test
 */
process.env.APP_ENV = 'jest';
process.env.LOG_DNA_TOKEN = 'logDNAToken';
process.env.LOG_DNA_APP_NAME = 'logDNAAppName';
process.env.LOG_DNA_DEFAULT = 'DEBUG';
process.env.SENTRY_IO_DSN = 'sentryDSN';
