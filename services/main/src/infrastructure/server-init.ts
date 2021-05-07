import { Server } from '@hapi/hapi';
import { routes } from './api';
import { plugins } from './plugins';

export async function initServer(s: Server): Promise<void> {
  await s.register(plugins);
  s.route(routes);
  await s.initialize();
  await s.start();
}
