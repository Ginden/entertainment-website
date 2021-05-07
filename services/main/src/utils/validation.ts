import { object, ObjectSchema, string } from 'joi';

export const nextPageCursorValidation: ObjectSchema = object({
  next: string().required(),
}).label('PaginationCursorObject');
