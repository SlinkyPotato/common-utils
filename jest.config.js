/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

/**
 * Environment Variables Test
 */
process.env.APP_ENV = 'local';
process.env.SENTRY_IO_DSN = 'sentryDSN';
process.env.GRAYLOG_HOST = 'graylogHost';
process.env.GRAYLOG_PORT = 0;
process.env.GRAYLOG_ADAPTER_NAME = 'udp';
process.env.GRAYLOG_APP_NAME = 'common-utils';
