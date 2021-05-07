"use strict";
var _pino;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormLogger = void 0;
const tslib_1 = require("tslib");
class TypeormLogger {
    constructor(logger) {
        _pino.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _pino, logger);
    }
    logQuery(query, parameters, queryRunner) {
        tslib_1.__classPrivateFieldGet(this, _pino).debug({
            msg: 'Query executed',
            typeorm: true,
            query,
            parameters,
            ...this.extractInfoFromQueryRunner(queryRunner),
        });
    }
    logQueryError(error, query, parameters, queryRunner) {
        tslib_1.__classPrivateFieldGet(this, _pino).error({
            msg: 'Query failed',
            typeorm: true,
            err: typeof error === 'string' ? new Error(error) : error,
            query,
            parameters,
            ...this.extractInfoFromQueryRunner(queryRunner),
        });
    }
    logQuerySlow(time, query, parameters, queryRunner) {
        tslib_1.__classPrivateFieldGet(this, _pino).warn({
            typeorm: true,
            query,
            parameters,
            timeTook: time,
            ...this.extractInfoFromQueryRunner(queryRunner),
        });
    }
    logSchemaBuild(message, queryRunner) {
        tslib_1.__classPrivateFieldGet(this, _pino).info({
            typeorm: true,
            msg: message,
            ...this.extractInfoFromQueryRunner(queryRunner),
        });
    }
    logMigration(message, queryRunner) {
        tslib_1.__classPrivateFieldGet(this, _pino).info({
            typeorm: true,
            msg: message,
            ...this.extractInfoFromQueryRunner(queryRunner),
        });
    }
    log(level, message, queryRunner) {
        tslib_1.__classPrivateFieldGet(this, _pino)[level === 'log' ? 'info' : level]({
            typeorm: true,
            msg: message,
            ...this.extractInfoFromQueryRunner(queryRunner),
        });
    }
    extractInfoFromQueryRunner(qr) {
        if (!qr) {
            return {};
        }
        return {
            transaction: qr.isTransactionActive ?? false,
            connection: {
                name: qr.connection?.name ?? null,
            },
        };
    }
}
exports.TypeormLogger = TypeormLogger;
_pino = new WeakMap();
//# sourceMappingURL=typeorm-logger.js.map