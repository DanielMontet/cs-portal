import React from "react"
import { meal, order } from "../types/props.types";

const meals = [{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 850,
	mealId: "nhte"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 200,
	mealId: "zxcd"

},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 250,
	mealId: "kluy"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 950,
	mealId: "asdc"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 450,
	mealId: "kaba"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 150,
	mealId: "jhnr"
}, {
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 250,
	mealId: "ascs"
}
	,
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 850,
	mealId: "kams"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 550,
	mealId: "awer"
},
{
	title: "Beans Stew with Chapati, Steamed Cabbage and Carrots + Small Fruit Salad",
	sold: 500,
	remaining: 1700,
	img: "https://d1xijv8wa1qxuu.cloudfront.net/Images/Products/2008/10800020/76daf6f0-e951-4ded-999a-4acf55c698a1.jpeg",
	price: 350,
	mealID: "ikuy"
}
]

function createOrderData(orderId: string, amount: number, status: string, pending: boolean) {
	return { orderId, amount, status, pending };
}

function createMealsData(mealId: string, title: string, sold: number, remaining: number, price: number, img: string) {
	return { mealId, title, sold, remaining, price, img }
}
const orders = [
	createOrderData("asdasdas", 305, "received", true),
	createOrderData("asdsasda", 452, "prepared", true),
	createOrderData("dsfdsfas", 262, "allocated", true),
	createOrderData("Fasdasss", 159, "prepared", true),
	createOrderData("sadsadss", 356, "delivered", false),
	createOrderData("sadasdsa", 408, "prepared", true),
	createOrderData("asdsadaa", 237, "allocated", true),
	createOrderData("sadsasao", 375, "received", true),
	createOrderData("Kiddsfds", 518, "on its way", true),
	createOrderData("Lsdfsdf", 392, "received", true),
	createOrderData("asdsadasd", 318, "on its way", true),
	createOrderData("asdasdsad", 360, "delivered", false),
	createOrderData("sdfdsffd", 437, "on its way", true),
];

export const getOrders = (): order[] => {
	return orders
}

export const getMeals = (): meal[] => {
	return meals
}

