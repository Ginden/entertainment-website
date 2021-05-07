import { number, object, ObjectSchema, string } from 'joi';
import { v4 } from 'uuid';

export const nextPageCursorValidation: ObjectSchema = object({
  next: string()
    .required()
    .example(Buffer.from(`id:${v4()}`, 'utf8').toString('base64')),
}).label('PaginationCursorObject');

export const imageSizeValidation: ObjectSchema = object({
  width: number().integer().positive().required(),
  height: number().integer().positive().required(),
}).label('ImageSize');

export const imageUploaderValidation: ObjectSchema = object({
  displayName: string(),
  username: string(),
}).label('ImageUploader');
