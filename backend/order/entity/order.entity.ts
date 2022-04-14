import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	total_price!: number

	// list of meals
	@Column()
	orderItems!: string

}
