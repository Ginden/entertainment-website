import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { any, object, Schema, string } from 'joi';
import { HapiFile } from '../../../utils/hapi';

type ImageUploadPayload = {
  description?: string;
  source?: string;
  file: HapiFile;
};

const imageUploadHandler: Lifecycle.Method = (request, h) => {
  const payload: ImageUploadPayload = request.payload as any;
  console.error(payload);
  throw notImplemented();
};

const imageUploadRequestValidator: RouteOptionsValidate = {
  payload: object<ImageUploadPayload>({
    description: string().optional(),
    source: string().uri().optional(),
    file: any().required().meta({ swaggerType: 'file' }),
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
    plugins: {
      'hapi-swagger': {
        payloadType: 'form',
      },
    },
    payload: {
      multipart: {
        output: 'file',
      },
    },
    tags: ['api'],
  },
};
