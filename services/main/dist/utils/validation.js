"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextPageCursorValidation = void 0;
const joi_1 = require("joi");
exports.nextPageCursorValidation = joi_1.object({
    next: joi_1.string().required(),
}).label('PaginationCursorObject');
//# sourceMappingURL=validation.js.map