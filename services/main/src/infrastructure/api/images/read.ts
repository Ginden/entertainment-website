import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { object, Schema, string } from 'joi';

const imageDetailsHandler: Lifecycle.Method = (request, h) => {
  throw notImplemented();
};

const imageDetailsRequestValidator: RouteOptionsValidate = {
  params: object({
    id: string().uuid(),
  }),
};

const imageDetailsResponseValidator: Schema = object({})
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
