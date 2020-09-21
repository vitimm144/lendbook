import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1600610018972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "createdAt",
                    type: "datetime",
                    isNullable: false
                },
                {
                    name: "collection",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "lentBooks",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "borrowedBooks",
                    type: "text",
                    isNullable: true
                },
            ]
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable("user");
    }

}
