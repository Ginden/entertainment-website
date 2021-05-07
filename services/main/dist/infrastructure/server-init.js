"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const api_1 = require("./api");
const plugins_1 = require("./plugins");
async function initServer(s) {
    await s.register(plugins_1.plugins);
    s.route(api_1.routes);
    await s.initialize();
    await s.start();
}
exports.initServer = initServer;
//# sourceMappingURL=server-init.js.map