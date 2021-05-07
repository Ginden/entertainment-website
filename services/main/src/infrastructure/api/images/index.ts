import { ServerRoute } from '@hapi/hapi';
import { imageListRoute } from './list';

export const imageRoutes: ServerRoute[] = [
  imageListRoute,
  singleImageRoute,
  uploadImageRoute,
];
