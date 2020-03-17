import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({name: 'sick'})
export class Sick extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    Age: number;
}