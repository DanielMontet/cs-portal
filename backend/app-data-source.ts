import { DataSource } from "typeorm"
import { Admin } from "./admin/entity/admin.entity";


const myDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "node-micro-admin-user",
	password: "node-micro-admin-user",
	database: "cs-portal",
	entities: [Admin],
	// logging: true,
	synchronize: true,
})

export default myDataSource;