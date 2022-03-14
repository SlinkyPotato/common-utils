import logdna from '@logdna/logger';
import { CommandContext } from 'slash-create';
import { SlashCommand } from 'slash-create';

export declare const Log: {
  info(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  warn(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  debug(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  error(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  fatal(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  trace(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  log(statement: string | object, options?: Omit<logdna.LogOptions, 'level'> | undefined): void;
  addMetaProperty(key: string, value: object): void;
  removeMetaProperty(key: string): void;
  flush(): void;
};

export declare const LogUtils: {
  logCommandStart: (ctx: CommandContext) => void;
  logCommandEnd: (ctx: CommandContext) => void;
  logError: (message: string, error: Error | unknown, guildId?: string) => void;
};

export declare const SentryUtils: {
  init: (appName: string, appVersion: string) => void;
};

export declare function command(target: SlashCommand, propertyKey: string, descriptor: PropertyDescriptor): void;

export interface DiscordEvent {
  name: string,
  once: boolean,
  /* eslint-disable @typescript-eslint/no-explicit-any */
  execute(...args: any[]): void
}

export declare function message_event(target: DiscordEvent, propertyKey: string, descriptor: PropertyDescriptor): void;

export declare const constants: Readonly<{
  env: string;
  logDNAToken: string | undefined;
  logDNAAppName: string | undefined;
  logDNADefault: string | undefined;
  sentryDSN: string | undefined;
}>;
