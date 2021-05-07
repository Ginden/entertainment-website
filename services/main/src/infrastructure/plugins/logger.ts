import { ServerRegisterPluginObject } from '@hapi/hapi';
import HapiPino from 'hapi-pino';
import P from 'pino';
import { loggerOptions } from '../../logger';

export const loggerPlugin: ServerRegisterPluginObject<
  HapiPino.Options & P.LoggerOptions
> = {
  plugin: HapiPino,
  options: {
    ...(loggerOptions as any),
    prettyPrint: false,
    logPayload: false,
    logRequestComplete: true,
  },
};
