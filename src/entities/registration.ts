import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { Institute } from "./institute";
import { Board } from "./board";
import { ClassCategory } from "./classCategory";
import { Standard } from "./standard";
import { Subject } from "./subject";
import { University } from "./university";
import { Degree } from "./degree";
import { Exam } from "./exam";

@Entity() 
export class Registration{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Institute)
    institute: Institute

    @ManyToOne(()=> Board, {nullable: true})
    board: Board | null;

    @ManyToOne(()=> ClassCategory, {nullable: true})
    classCategory: ClassCategory | null;

    @ManyToOne(()=> Standard, {nullable: true})
    standard: Standard | null;

    @ManyToOne(()=> Subject, {nullable: true})
    subject: Subject | null;

    @ManyToOne(()=> University, {nullable: true})
    university: University | null;

    @ManyToOne(()=> Degree, {nullable: true})
    degree: Degree | null;

    @ManyToOne(()=> Exam, {nullable: true})
    exam: Exam | null;

    @CreateDateColumn()
    registeredAt: Date;
}