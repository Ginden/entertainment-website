import P from 'pino';
import type { Logger } from 'pino';

export const loggerOptions: P.LoggerOptions = {
  timestamp: true,
  useLevelLabels: true,
};

export const logger: Logger = P(loggerOptions);
