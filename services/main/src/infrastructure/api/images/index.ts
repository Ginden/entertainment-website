import { ServerRoute } from '@hapi/hapi';
import { imageListRoute } from './list';
import { singleImageRoute } from './read';
import { imageUploadRoute } from './upload';

export const imageRoutes: ServerRoute[] = [
  imageListRoute,
  singleImageRoute,
  imageUploadRoute,
];
