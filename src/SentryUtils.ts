import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import constants from './constants';

const SentryUtils = {
  init: (appName: string, appVersion: string) => {
    Sentry.init({
      dsn: `${constants.sentryDSN}`,
      tracesSampleRate: 1.0,
      release: `${appName}@${appVersion}`,
      environment: `${process.env.SENTRY_ENVIRONMENT}`,
      integrations: [
        new RewriteFrames({
          root: __dirname,
        }),
        new Sentry.Integrations.Http({ tracing: true }),
      ],
    });
  },
};

export default SentryUtils;
