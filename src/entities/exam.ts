import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // JEE, NEET, UPSC, GPSC etc.
}