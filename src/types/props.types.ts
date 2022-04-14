import React from "react";


export interface order {
	orderId?: string;
	amount?: number;
	status?: string;
	pending?: boolean
	phone?: string
	date?: any
}
export interface meal {
	mealId?: string
	title?: string
	sold?: number
	remaining?: number
	price?: number
	img?: string
}

export interface cartItem {
	title: string
	quantity: number
	mealId: string | number,
	price: string | number
}

export interface user {
	id?: number,
	name?: string,
	email?: string,
	address?: {
		street?: string,
		suite?: string,
		city?: string,
		zipcode?: string,
		geo?: {
			lat: string,
			lng: string
		}
	}
}

export interface comment {
	userName?: string,
	id?: string,
	notes?: string,
	date?: string
}

export type AppProps = {
	page?: JSX.Element,
	children?: any,
	index?: number,
	value?: number,
	orderData?: order[],
	mealsData?: meal[],
	userData?: user[],
	isNavOpen?: boolean,
	setIsNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	editUser?: boolean,
	comments?: comment[],
	setComments?: React.Dispatch<React.SetStateAction<{}[]>>,
	setCustomerDetails?: React.Dispatch<React.SetStateAction<any>>
}

interface globalContextType {
	orders?: order[];
	setorders?: React.Dispatch<React.SetStateAction<{}[]>>;
	users?: user[];
	setUsers?: React.Dispatch<React.SetStateAction<{}[]>>;
	customers?: any[];
	setCustomers?: React.Dispatch<React.SetStateAction<{}[]>>;
	isLoggedIn?: boolean;
	setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
	currentUser?: {};
	setCurrentUser?: React.Dispatch<React.SetStateAction<{}[]>>;
	handleOrderSearch?: (orderId: string) => order[];
	meals?: meal[],
	comments?: comment[],
	setComments?: React.Dispatch<React.SetStateAction<comment[] | undefined>>;
	customerDetails?: {
		firstName?: string,
		lastName?: string,
		email?: string,
		deliveryAddress?: string,
		companyOrAppartment?: string,
		note?: string
	}
	setCustomerDetails?: React.Dispatch<React.SetStateAction<{}>>;
	handleAddToCart?: (meal: meal) => any;
	cart?: cartItem[];
	handleSubtractFromCart?: (meal: meal) => any;
}

export const GlobalAppContext = React.createContext<globalContextType>({});