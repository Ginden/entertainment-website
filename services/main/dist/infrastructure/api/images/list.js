"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageListRoute = void 0;
const boom_1 = require("@hapi/boom");
const joi_1 = require("joi");
const validation_1 = require("../../../utils/validation");
const imagesListHandler = (request, h) => {
    throw boom_1.notImplemented();
};
const imagesListRequestValidator = {
    query: joi_1.object({
        after: joi_1.string().optional(),
    }).label('ImageListQuerystring'),
};
const imagesListResponseValidator = joi_1.object({
    imageList: joi_1.array().items(joi_1.object().unknown(true).label('ShortImage')),
    cursor: validation_1.nextPageCursorValidation,
})
    .unknown(true)
    .label('ImageListResponse');
exports.imageListRoute = {
    method: 'GET',
    handler: imagesListHandler,
    path: `/image/list`,
    options: {
        validate: imagesListRequestValidator,
        response: {
            schema: imagesListResponseValidator,
        },
        tags: ['api'],
    },
};
//# sourceMappingURL=list.js.map