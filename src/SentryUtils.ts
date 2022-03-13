import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import constants from './constants';
import LogUtils from './LogUtils';

const SentryUtils = {
  init: (appName: string, appVersion: string) => {
    try {
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
    } catch (e) {
      LogUtils.logError('failed to initialize sentry', e);
    }
  },
};

export default SentryUtils;
