import * as Sentry from '@sentry/node';
import { CommandContext } from 'slash-create';
import Log from './Log';
import EnvConstants from './EnvConstants';

const LogUtils = {
  logCommandStart(ctx: CommandContext): void {
    try {
      Log.info(`/${ctx.commandName} ${ctx.options[0]} ran ${ctx.user.username}#${ctx.user.discriminator}`, {
        indexMeta: true,
        meta: {
          guildId: ctx.guildID,
          userTag: `${ctx.user.username}#${ctx.user.discriminator}`,
          userId: ctx.user.id,
          params: ctx.options,
        },
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  logCommandEnd(ctx: CommandContext): void {
    try {
      Log.info(`/${ctx.commandName} ${ctx.options[0]} ended ${ctx.user.username}#${ctx.user.discriminator}`, {
        indexMeta: true,
        meta: {
          guildId: ctx.guildID,
          userTag: `${ctx.user.username}#${ctx.user.discriminator}`,
          userId: ctx.user.id,
          params: ctx.options,
        },
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  
  logError(message: string, error: Error | unknown, guildId?: string): void {
    try {
      if (error != null && error instanceof Error) {
        Sentry.captureException(error);
        Log.error(message, {
          indexMeta: true,
          meta: {
            name: error?.name,
            message: error?.message,
            stack: error?.stack,
            guildId: guildId,
          },
        });
        if (EnvConstants.APP_ENV == 'local') {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      } else {
        Log.error(message);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
};

export default LogUtils;

