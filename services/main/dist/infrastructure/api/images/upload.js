"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUploadRoute = void 0;
const boom_1 = require("@hapi/boom");
const joi_1 = require("joi");
const imageUploadHandler = (request, h) => {
    throw boom_1.notImplemented();
};
const imageUploadRequestValidator = {
    payload: joi_1.object({
        file: joi_1.any().meta({ swaggerType: 'file' }),
    }),
};
const imageUploadResponseValidator = joi_1.object({})
    .unknown(true)
    .label('ImageUploadResponse');
exports.imageUploadRoute = {
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
//# sourceMappingURL=upload.js.map