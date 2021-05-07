import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { object, Schema, string } from 'joi';
import {
  imageSizeValidation,
  imageUploaderValidation,
} from '../../../utils/validation';

const imageDetailsHandler: Lifecycle.Method = (request, h) => {
  throw notImplemented();
};

const imageDetailsRequestValidator: RouteOptionsValidate = {
  params: object({
    id: string().uuid().required(),
  }),
};

const imageDetailsResponseValidator: Schema = object({
  id: string().uuid().required(),
  url: string().uri().example('http://example.com/image.jpg').required(),
  contentType: string().example('image/jpeg').required(),
  size: imageSizeValidation.required(),
  contentDescription: string().optional().allow(null),
  ocr: string().allow('').default(''),
  author: imageUploaderValidation.allow(null).default(null),
}).label('ImageDetailsResponse');

export const singleImageRoute: ServerRoute = {
  method: 'GET',
  handler: imageDetailsHandler,
  path: `/image/{id}`,
  options: {
    validate: imageDetailsRequestValidator,
    response: {
      schema: imageDetailsResponseValidator,
    },
    tags: ['api'],
  },
};
