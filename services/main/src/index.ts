import {Server} from '@hapi/hapi';
import { get } from 'config';
import { initServer } from './infrastructure/server-init';

let server: Server | null = null;





if (require.main === module) {
  server = new Server({
    port: get<number>('app.port'),
  })
  initServer(server)
    .catch()
}
