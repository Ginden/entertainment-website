import { Server } from '@hapi/hapi';
import { routes } from './api';
import { plugins } from './plugins';

export async function initServer(s: Server): Promise<void> {
  s.route(routes);
  await s.register(plugins);
  await s.initialize();
  await s.start();
}
