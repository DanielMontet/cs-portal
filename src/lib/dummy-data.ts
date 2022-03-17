import React from "react"
import { order } from "../types/props.types";

export const meals = [{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
}, {
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
}
	,
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg"
}
]

function createData(orderId: string, amount: number, status: string) {
	return { orderId, amount, status };
}

const orders = [
	createData("asdasdas", 305, "received"),
	createData("asdsasda", 452, "prepared"),
	createData("dsfdsfas", 262, "allocated"),
	createData("Fasdasss", 159, "prepared"),
	createData("sadsadss", 356, "delivered"),
	createData("sadasdsa", 408, "prepared"),
	createData("asdsadaa", 237, "allocated"),
	createData("sadsasao", 375, "received"),
	createData("Kiddsfds", 518, "on its way"),
	createData("Lsdfsdf", 392, "received"),
	createData("asdsadasd", 318, "on its way"),
	createData("asdasdsad", 360, "delivered"),
	createData("sdfdsffd", 437, "on its way"),
];

export const getOrders = (): order[] => {
	return orders
}

