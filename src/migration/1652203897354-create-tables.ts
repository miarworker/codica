import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTables1652203897354 implements MigrationInterface {
    name = 'createTables1652203897354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isNullable: false,
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                    isUnique: true
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: 'service',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isNullable: false,
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: 'subscription',
            columns: [
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false,
                    isPrimary: true
                },
                {
                    name: 'service_id',
                    type: 'int',
                    isNullable: false,
                    isPrimary: true
                },
                {
                    name: 'is_banned',
                    type: 'boolean',
                    isNullable: true,
                    default: false
                }
            ],
            uniques: [{name: 'user_service', columnNames: ['user_id', 'service_id']}]
        }), true)

        await queryRunner.createForeignKeys('subscription', [
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'service',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user',
                onDelete: 'CASCADE'
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`subscription`);
        await queryRunner.dropTable(`service`);
        await queryRunner.dropTable(`user`);
    }

}
