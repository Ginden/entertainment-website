"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsPlugin = void 0;
const tslib_1 = require("tslib");
const hapi_swagger_1 = tslib_1.__importDefault(require("hapi-swagger"));
exports.docsPlugin = {
    plugin: hapi_swagger_1.default,
    options: {
        info: {
            title: 'Funny Images API',
        },
    },
};
//# sourceMappingURL=docs.js.map