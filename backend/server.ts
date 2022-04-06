import express from "express";
import path from "path";
import cors from "cors"
import db from "./app-data-source"
import { Admin } from "./admin/entity/admin.entity";
import jwt from "jsonwebtoken"
import { User } from "./user/entity/user.entity";


// establish database connection
db
	.initialize()
	.then(() => {
		// connect to message queue

		// initialize express server
		const app = express();
		const port = process.env.PORT! || 3000;
		const adminRepository = db.getRepository(Admin)
		const userRepository = db.getRepository(User)

		app.use(cors({
			origin: ['http://localhost:3000']
		}))

		app.use(express.json());
		app.use(express.static(path.join(__dirname, "build")));

		app.get("/", function (req, res) {
			res.sendFile(path.join(__dirname, "build", "index.html"));
		});

		app.post("/api/login", async (req, res) => {
			// find user
			let user = await userRepository.findOne({
				where: {
					email: req.body.email
				}
			})
			if (user) {
				jwt.sign({ user }, "secretKey", (err, token) => {
					res.json({ token })
				})
			}

			return null
		});

		app.get("/api/users", verifyToken, (req: any, res) => {
			jwt.verify(req.token!, "secretKey", async (err, authData) => {
				if (err) {
					res.sendStatus(403);
				} else {
					const result = await userRepository.find()
					res.send(result);
				}
			})
		})

		app.post("/api/create_user", async (req, res) => {
			const user = await userRepository.create(req.body);
			let result = await userRepository.save(user);
			return res.send(result).status(200)
		})

		app.post("/api/create-super-user", (req, res) => {
			// create super user
			// 

		})

		//Verify Token
		function verifyToken(req, res, next) {
			// get auth header value
			const bearerHeader = req.headers['authorization'];
			//chack if bearer is undefined
			if (typeof bearerHeader !== 'undefined') {
				const bearer = bearerHeader.split(' ');
				//get token from array
				const bearerToken = bearer[1];
				req.token = bearerToken
				//next middleware
				next()
			} else {
				//Forbidden
				return res.send("Forbidden").status(403)
			}
		}




		app.listen(port, () => {
			console.log(`admin running successfully on port ${port}`)
		})

	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err)
	})
