import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { array, object, Schema, string } from 'joi';
import { Queues } from '../../../enums/queues';
import { nextPageCursorValidation } from '../../../utils/validation';

const imagesFeedHandler: Lifecycle.Method = (request, h) => {
  throw notImplemented();
};

const imagesFeedRequestValidator: RouteOptionsValidate = {
  query: object({
    after: string().optional(),
    queue: string()
      .allow(...Object.values(Queues))
      .default(Queues.MAIN),
  }).label('ImageListQuerystring'),
};

const imagesFeedResponseValidator: Schema = object({
  res: array().items(
    object({
      id: string().uuid(),
    })
      .unknown(true)
      .label('ShortImage'),
  ),
  cursor: nextPageCursorValidation,
})
  .unknown(true)
  .label('ImageListResponse');

export const imageFeedRoute: ServerRoute = {
  method: 'GET',
  handler: imagesFeedHandler,
  path: `/image/feed`,
  options: {
    validate: imagesFeedRequestValidator,
    response: {
      schema: imagesFeedResponseValidator,
    },
    tags: ['api'],
  },
};
