import {
    Column,
    ObjectIdColumn,
    ObjectID,
    Entity,
} from "typeorm";

@Entity()
export class BookLoan {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    fromUser!: string;

    @Column()
    toUser!: string;

    @Column()
    lentAt!: Date;

    @Column()
    returnedAt!: Date;

}
