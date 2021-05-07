import { notImplemented } from '@hapi/boom';
import { Lifecycle, RouteOptionsValidate, ServerRoute } from '@hapi/hapi';
import { array, object, Schema, string } from 'joi';
import { nextPageCursorValidation } from '../../../utils/validation';

const imagesListHandler: Lifecycle.Method = (request, h) => {
  throw notImplemented();
};

const imagesListRequestValidator: RouteOptionsValidate = {
  query: object({
    after: string().optional(),
  }).label('ImageListQuerystring'),
};

const imagesListResponseValidator: Schema = object({
  imageList: array().items(object().unknown(true).label('ShortImage')),
  cursor: nextPageCursorValidation,
})
  .unknown(true)
  .label('ImageListResponse');

export const imageListRoute: ServerRoute = {
  method: 'GET',
  handler: imagesListHandler,
  path: `/image/list`,
};
