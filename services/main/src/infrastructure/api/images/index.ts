import { ServerRoute } from '@hapi/hapi';
import { imageFeedRoute } from './list';
import { singleImageRoute } from './read';
import { imageUploadRoute } from './upload';

export const imageRoutes: ServerRoute[] = [
  imageFeedRoute,
  singleImageRoute,
  imageUploadRoute,
];
