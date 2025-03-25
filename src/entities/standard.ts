import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ClassCategory } from './classCategory'

@Entity()
export class Standard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th, 12th

    @ManyToOne(()=> ClassCategory)
    classCategory: ClassCategory;
}