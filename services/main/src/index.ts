import { Server } from '@hapi/hapi';
import { get } from 'config';
import { initServer } from './infrastructure/server-init';
import { logger } from './logger';
import { setTimeout } from 'timers/promises';

let server: Server | null = null;

function catchException(err: Error) {
  const chosenLogger = server?.logger ?? logger;
  chosenLogger.fatal({
    err,
  });
  void server?.stop({ timeout: 500 });
  setTimeout(500).finally(() => {
    process.exit(1);
  });
}

function catchWarning(warning: Error) {
  const chosenLogger = server?.logger ?? logger;
  chosenLogger.warn({
    err: warning,
  });
}

if (require.main === module) {
  server = new Server({
    port: get<number>('app.port'),
    host: get<string>('app.host'),
  });
  server.logger = logger;
  initServer(server).catch(catchException);
  process.on('warning', catchWarning);
  process.on('uncaughtException', catchException);
  process.on('unhandledRejection', catchException);
}
