"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleImageRoute = void 0;
const boom_1 = require("@hapi/boom");
const joi_1 = require("joi");
const imageDetailsHandler = (request, h) => {
    throw boom_1.notImplemented();
};
const imageDetailsRequestValidator = {
    params: joi_1.object({
        id: joi_1.string().uuid(),
    }),
};
const imageDetailsResponseValidator = joi_1.object({})
    .unknown(true)
    .label('ImageDetailsResponse');
exports.singleImageRoute = {
    method: 'GET',
    handler: imageDetailsHandler,
    path: `/image/{id}`,
    options: {
        validate: imageDetailsRequestValidator,
        response: {
            schema: imageDetailsResponseValidator,
        },
        tags: ['api'],
    },
};
//# sourceMappingURL=read.js.map