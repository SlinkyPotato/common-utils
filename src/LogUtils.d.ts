import { CommandContext } from 'slash-create';

declare const LogUtils: {
  logCommandStart: (ctx: CommandContext) => void;
  logCommandEnd: (ctx: CommandContext) => void;
  logError: (message: string, error: Error | unknown, guildId?: string) => void;
};

export default LogUtils;
