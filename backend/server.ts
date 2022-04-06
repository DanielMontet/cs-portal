import express from "express";
import path from "path";
import cors from "cors"
// const express = require("express");
// const path = require("path");
const app = express();
import db from "./app-data-source"
import { Admin } from "./admin/entity/admin.entity";


// establish database connection
db
	.initialize()
	.then(() => {
		// connect to message queue

		// initialize express server
		const app = express();
		const port = process.env.PORT! || 3000;
		const adminRepository = db.getRepository(Admin)

		app.use(cors({
			origin: ['http://localhost:3000']
		}))

		app.use(express.json());
		app.use(express.static(path.join(__dirname, "build")));

		app.get("/", function (req, res) {
			res.sendFile(path.join(__dirname, "build", "index.html"));
		});

		app.post("/api/login", (req, res) => {

		});

		app.post("/api/create-super-user", (req, res) => {
			// create super user

		})


		// app.get("/api/products", async (_req, _res) => {
		// 	const products = await productRepository.find();
		// 	return _res.json(products)
		// })

		// app.post("/api/products", async (_req, _res) => {
		// 	const product = await productRepository.create(_req.body);
		// 	const result = await productRepository.save(product)
		// 	channel.sendToQueue("product_created", Buffer.from(JSON.stringify(result)))
		// 	return _res.send(result)
		// })

		// app.get("/api/products/:id", async (_req, _res) => {
		// 	const product = await productRepository.findOne({
		// 		where: {
		// 			id: Number(_req.params.id)
		// 		}
		// 	});
		// 	return _res.send(product)
		// })

		// app.put("/api/products/:id", async (_req, _res) => {
		// 	const product = await productRepository.findOne({
		// 		where: {
		// 			id: Number(_req.params.id)
		// 		}
		// 	})
		// 	productRepository.merge(product!, _req.body);
		// 	const result = await productRepository.save(product!);
		// 	channel.sendToQueue("product_updated", Buffer.from(JSON.stringify(result)))
		// 	return _res.send(result);
		// })

		// app.delete("/api/products/:id", async (_req, _res) => {
		// 	const result = await productRepository.delete(_req.params.id)
		// 	channel.sendToQueue("product_deleted", Buffer.from(JSON.stringify(_req.params.id)))
		// 	return _res.send(result);
		// })

		// app.post("/api/products/:id/like", async (_req, _res) => {
		// 	const product = await productRepository.findOne({
		// 		where: {
		// 			id: Number(_req.params.id)
		// 		}
		// 	})
		// 	product!.likes++;
		// 	const result = await productRepository.save(product!);
		// 	return _res.send(result);
		// })


		app.listen(port, () => {
			console.log(`admin running successfully on port ${port}`)
		})

	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err)
	})
