import logdna from '@logdna/logger';

declare const Log: {
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
export default Log;
