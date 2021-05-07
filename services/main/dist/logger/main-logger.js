"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.loggerOptions = void 0;
const tslib_1 = require("tslib");
const pino_1 = tslib_1.__importDefault(require("pino"));
exports.loggerOptions = {
    timestamp: true,
    useLevelLabels: true,
};
exports.logger = pino_1.default(exports.loggerOptions);
//# sourceMappingURL=main-logger.js.map