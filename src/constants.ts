const constants = Object.freeze({
  env: process.env.APP_ENV as string,
  logDNAToken: process.env.LOGDNA_TOKEN,
  logDNAAppName: process.env.LOGDNA_APP_NAME,
  logDNADefault: process.env.LOGDNA_DEFAULT_LEVEL,
  sentryDSN: process.env.SENTRY_IO_DSN,
});

export default constants;
