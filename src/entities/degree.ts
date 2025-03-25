import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { University } from "./university";

@Entity()
export class Degree {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // Bachelor's, Master's

    @ManyToOne(()=> University)
    university: University
}