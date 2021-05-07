import { MigrationInterface, QueryRunner } from "typeorm";
import { singleLine } from "../../../../utils/single-line";

export class InitUser1620425193947 implements MigrationInterface {
  name = 'InitUser1620425193947'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(singleLine`
        CREATE EXTENSION IF NOT EXISTS "citext";
    `);
    await queryRunner.query(singleLine`CREATE TABLE "user"
                             (
                                 "createdAt"   TIMESTAMP             NOT NULL DEFAULT now(),
                                 "updateAt"    TIMESTAMP             NOT NULL DEFAULT now(),
                                 "id"          uuid                  NOT NULL DEFAULT uuid_generate_v4(),
                                 "email"       citext                NOT NULL,
                                 "displayName" character varying(36) NOT NULL,
                                 CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                                 CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(singleLine`CREATE TYPE "auth_provider_provider_enum" AS ENUM('FACEBOOK', 'GOOGLE', 'APPLE', 'DISCORD', 'GITHUB')`);
    await queryRunner.query(singleLine`CREATE TABLE "auth_provider"
                             (
                                 "createdAt"  TIMESTAMP                     NOT NULL DEFAULT now(),
                                 "updateAt"   TIMESTAMP                     NOT NULL DEFAULT now(),
                                 "provider"   "auth_provider_provider_enum" NOT NULL,
                                 "externalId" text                          NOT NULL,
                                 "details"    jsonb                         NOT NULL,
                                 "userId"     uuid                          NOT NULL,
                                 CONSTRAINT "PK_e238f02b7538f33d6774bc18243" PRIMARY KEY ("provider", "userId")
                             )`);
    await queryRunner.query(singleLine`ALTER TABLE "auth_provider"
        ADD CONSTRAINT "FK_d9255ec09fddab3e47e84fd2a07" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "auth_provider"
        DROP CONSTRAINT "FK_d9255ec09fddab3e47e84fd2a07"`);
    await queryRunner.query(`DROP TABLE "auth_provider"`);
    await queryRunner.query(`DROP TYPE "auth_provider_provider_enum"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }

}
