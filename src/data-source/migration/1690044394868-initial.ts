import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Initial1690044394868 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('people-book', true);
        await queryRunner.createTable(
            new Table({
                name: 'persons',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'lastname',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'birthdate',
                        type: 'date',
                        isNullable: false,
                    },
                ],
                indices: [
                    {
                        name: 'persons-name',
                        columnNames: ['name'],
                        isUnique: false,
                    },
                    {
                        name: 'persons-lastname',
                        columnNames: ['lastname'],
                        isUnique: false,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('persons', true);
        queryRunner.dropDatabase('people-book', true);
    }
}
