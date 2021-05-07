import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { any, object, Schema, string } from 'joi';

const imageUploadHandler: Lifecycle.Method = (request, h) => {
  throw notImplemented();
};

const imageUploadRequestValidator: RouteOptionsValidate = {
  payload: object({
    file: any().meta({ swaggerType: 'file' }),
  }),
};

const imageUploadResponseValidator: Schema = object({})
  .unknown(true)
  .label('ImageUploadResponse');

export const imageUploadRoute: ServerRoute = {
  method: 'POST',
  handler: imageUploadHandler,
  path: `/image/upload`,
  options: {
    validate: imageUploadRequestValidator,
    response: {
      schema: imageUploadResponseValidator,
    },
    tags: ['api'],
  },
};
