"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitImage1620416388439 = void 0;
const single_line_1 = require("./src/utils/single-line");
class InitImage1620416388439 {
    constructor() {
        this.name = 'InitImage1620416388439';
    }
    async up(queryRunner) {
        await queryRunner.query(single_line_1.singleLine `
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);
        await queryRunner.query(single_line_1.singleLine `
        CREATE TABLE "image"
        (
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updateAt"  TIMESTAMP NOT NULL DEFAULT now(),
            "id"        uuid      NOT NULL DEFAULT uuid_generate_v4(),
            "storage"   jsonb     NOT NULL,
            CONSTRAINT "CHK_c3c7d2df7bf725d5b02a02ca3e" CHECK (((jsonb_typeof(storage -> 'path') = 'string')) AND
                                                               ((jsonb_typeof(storage -> 'storage') = 'string')) AND
                                                               ((jsonb_typeof(storage -> 'details') = 'null') OR
                                                                (jsonb_typeof(storage -> 'details') = 'object'))),
            CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")
        )`);
    }
    async down(queryRunner) {
        await queryRunner.query(single_line_1.singleLine `DROP TABLE "image"`);
    }
}
exports.InitImage1620416388439 = InitImage1620416388439;
//# sourceMappingURL=1620416388439-InitImage.js.map