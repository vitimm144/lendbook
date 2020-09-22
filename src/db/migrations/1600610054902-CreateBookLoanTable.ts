import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBookLoanTable1600610054902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: "book_loan",
            columns: [
                {
                    name: "book",
                    type: "string",
                    isNullable: false
                },
                {
                    name: "fromUser",
                    type: "string",
                    isNullable: false
                },
                {
                    name: "toUser",
                    type: "string",
                    isNullable: false
                },
                {
                    name: "lentAt",
                    type: "datetime",
                    isNullable: false
                },
                {
                    name: "returnedAt",
                    type: "datetime",
                    isNullable: true
                }
            ]
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable("book_loan");
    }

}
