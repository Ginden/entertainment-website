import { ServerRoute } from '@hapi/hapi';
import { imageRoutes } from "./images";

export const routes: ServerRoute[] = [
  ...imageRoutes,
];
