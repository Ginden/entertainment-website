"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerPlugin = void 0;
const tslib_1 = require("tslib");
const hapi_pino_1 = tslib_1.__importDefault(require("hapi-pino"));
const logger_1 = require("../../logger");
exports.loggerPlugin = {
    plugin: hapi_pino_1.default,
    options: {
        ...logger_1.loggerOptions,
        prettyPrint: false,
        logPayload: false,
        logRequestComplete: true,
    },
};
//# sourceMappingURL=logger.js.map