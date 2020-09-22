import {
    Column,
    Entity,
    ObjectIdColumn,
    ObjectID,
} from "typeorm";

@Entity()
export class Book {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    title!: string;

    @Column()
    createdAt!: Date;

    @Column()
    pages!: number;

}
