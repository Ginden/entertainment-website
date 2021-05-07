"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRoutes = void 0;
const list_1 = require("./list");
const read_1 = require("./read");
const upload_1 = require("./upload");
exports.imageRoutes = [
    list_1.imageListRoute,
    read_1.singleImageRoute,
    upload_1.imageUploadRoute,
];
//# sourceMappingURL=index.js.map