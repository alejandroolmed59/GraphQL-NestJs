import { Entity, ObjectIdColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Student {
    @ObjectIdColumn()
    _id:string;

    @PrimaryColumn()
    carnet:string;

    @Column()
    nombre:string;

    @Column()
    apellido:string;
}