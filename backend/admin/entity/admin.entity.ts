import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Admin {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	email!: string

	@Column()
	firstName!: string;

	@Column()
	lastName!: string;
}
