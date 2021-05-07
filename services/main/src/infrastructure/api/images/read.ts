import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { number, object, Schema, string } from 'joi';

const imageDetailsHandler: Lifecycle.Method = (request, h) => {
  throw notImplemented();
};

const imageDetailsRequestValidator: RouteOptionsValidate = {
  params: object({
    id: string().uuid().required(),
  }),
};

const imageDetailsResponseValidator: Schema = object({
  url: string().uri().example('http://example.com/image.jpg').required(),
  contentType: string().example('image/jpeg').required(),
  size: object({
    width: number().integer().positive().required(),
    height: number().integer().positive().required(),
  }).required().label('ImageSize'),
  contentDescription: string().optional().allow(null),
  ocr: string().allow('').default(''),
})
  .unknown(true)
  .label('ImageDetailsResponse');

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
