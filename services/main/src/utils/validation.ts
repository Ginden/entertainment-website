import { object, ObjectSchema, string } from 'joi';
import { v4 } from 'uuid';

export const nextPageCursorValidation: ObjectSchema = object({
  next: string()
    .required()
    .example(Buffer.from(`id:${v4()}`, 'utf8').toString('base64')),
}).label('PaginationCursorObject');
