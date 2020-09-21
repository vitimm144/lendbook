import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('book_loan')
export class BookLoan extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    email!: string;

    @Column()
    createdAt!: Date;

    @Column()
    collection!: string;

    @Column()
    lentBooks!: string;

    @Column()
    borrowedBooks!: string;

}
