"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = void 0;
const tslib_1 = require("tslib");
const logger_1 = require("./logger");
const inert_1 = tslib_1.__importDefault(require("@hapi/inert"));
const vision_1 = tslib_1.__importDefault(require("@hapi/vision"));
const docs_1 = require("./docs");
exports.plugins = [
    logger_1.loggerPlugin,
    {
        plugin: inert_1.default,
    },
    {
        plugin: vision_1.default,
    },
    docs_1.docsPlugin,
];
//# sourceMappingURL=index.js.map