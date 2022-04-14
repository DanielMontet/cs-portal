import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meal {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	title!: string

	@Column()
	price!: number

	@Column()
	img!: string

}