import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ClassCategory{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; //Pre-primary, Primary, Secondary, Higher-Secondary
}