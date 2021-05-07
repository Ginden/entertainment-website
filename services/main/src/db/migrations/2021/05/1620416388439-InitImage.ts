import { MigrationInterface, QueryRunner } from 'typeorm';
import { singleLine } from '../../../../utils/single-line';

export class InitImage1620416388439 implements MigrationInterface {
  name = 'InitImage1620416388439';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(singleLine`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);
    await queryRunner.query(singleLine`
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(singleLine`DROP TABLE "image"`);
  }
}
