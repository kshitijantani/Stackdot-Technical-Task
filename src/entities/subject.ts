import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Standard } from "./standard";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // Math, Science, etc.

    @ManyToOne(()=> Standard)
    standard: Standard;
}