import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1652203897354 implements MigrationInterface {
    name = 'createTables1652203897354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text NOT NULL, CONSTRAINT "UQ_eaae4b7c4571ef8eec883d6202f" UNIQUE ("title"), CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscription" ("user_id" integer NOT NULL, "service_id" integer NOT NULL, "is_banned" boolean, "serviceId" integer, "userId" integer, CONSTRAINT "userId_serviceId" UNIQUE ("user_id", "service_id"), CONSTRAINT "REL_3ed4310c95154b4be4c4d13fe6" UNIQUE ("serviceId"), CONSTRAINT "REL_cc906b4bc892b048f1b654d2aa" UNIQUE ("userId"), CONSTRAINT "PK_b9fcf4d405cb5a5ac4e126a9050" PRIMARY KEY ("user_id", "service_id"))`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "is_banned"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "REL_3ed4310c95154b4be4c4d13fe6"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "serviceId"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "REL_cc906b4bc892b048f1b654d2aa"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "is_banned" boolean`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "serviceId" integer`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "UQ_3ed4310c95154b4be4c4d13fe69" UNIQUE ("serviceId")`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "UQ_cc906b4bc892b048f1b654d2aa0" UNIQUE ("userId")`);
        await queryRunner.query(`CREATE INDEX "IDX_940d49a105d50bbd616be54001" ON "subscription" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_79f599f6ffb8c8e77c031fb2ed" ON "subscription" ("service_id") `);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_3ed4310c95154b4be4c4d13fe69" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_940d49a105d50bbd616be540013" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_79f599f6ffb8c8e77c031fb2ed4" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_79f599f6ffb8c8e77c031fb2ed4"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_940d49a105d50bbd616be540013"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_3ed4310c95154b4be4c4d13fe69"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79f599f6ffb8c8e77c031fb2ed"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_940d49a105d50bbd616be54001"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "UQ_cc906b4bc892b048f1b654d2aa0"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "UQ_3ed4310c95154b4be4c4d13fe69"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "serviceId"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "is_banned"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "REL_cc906b4bc892b048f1b654d2aa" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "serviceId" integer`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "REL_3ed4310c95154b4be4c4d13fe6" UNIQUE ("serviceId")`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "is_banned" boolean`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
