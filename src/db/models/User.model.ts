import {
    Column,
    ObjectIdColumn,
    ObjectID,
    Entity,
} from "typeorm";
import { Book } from './Book.models'
import { BookLoan } from './BookLoan.models'

@Entity()
export class User {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    createdAt!: Date;

    @Column()
    collection!: Book[];

    @Column()
    lentBooks!: BookLoan[];

    @Column()
    borrowedBooks!: BookLoan[];

}
