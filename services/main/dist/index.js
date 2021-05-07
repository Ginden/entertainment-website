"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("@hapi/hapi");
const config_1 = require("config");
const server_init_1 = require("./infrastructure/server-init");
const logger_1 = require("./logger");
const promises_1 = require("timers/promises");
let server = null;
function catchException(err) {
    const chosenLogger = server?.logger ?? logger_1.logger;
    chosenLogger.fatal({
        err,
    });
    void server?.stop({ timeout: 500 });
    promises_1.setTimeout(500).finally(() => {
        process.exit(1);
    });
}
function catchWarning(warning) {
    const chosenLogger = server?.logger ?? logger_1.logger;
    chosenLogger.warn({
        err: warning,
    });
}
if (require.main === module) {
    server = new hapi_1.Server({
        port: config_1.get('app.port'),
        host: config_1.get('app.host'),
    });
    server.logger = logger_1.logger;
    server_init_1.initServer(server).catch(catchException);
    process.on('warning', catchWarning);
    process.on('uncaughtException', catchException);
    process.on('unhandledRejection', catchException);
}
//# sourceMappingURL=index.js.map