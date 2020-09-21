import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('user')
export class User extends BaseEntity{

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
