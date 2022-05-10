import {MigrationInterface, QueryRunner} from "typeorm";

export class insertData1652204139325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into "user" (name, email) values ('Oliver','Oliver@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('Jack','Jack@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('Harry','Harry@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('Jacob','Jacob@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('Charley','Charley@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('Thomas','Thomas@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('George','George@gmail.com')`);
        await queryRunner.query(`insert into "user" (name, email) values ('Oscar','Oscar@gmail.com')`);

        await queryRunner.query(`insert into "service" (title, description) values ('Blind Text Generator','random text generator')`);
        await queryRunner.query(`insert into "service" (title, description) values ('Random UserEntity Generator','random user generator')`);
        await queryRunner.query(`insert into "service" (title, description) values ('UserEntity Inter Faces','avatar generator for your project.')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable('service');
        await queryRunner.clearTable('user');
    }

}
