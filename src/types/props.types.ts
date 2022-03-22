import { ExecOptionsWithStringEncoding } from "child_process";
import React from "react";

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
	editUser?: boolean
}

interface globalContextType {
	orders?: order[];
	setorders?: React.Dispatch<React.SetStateAction<{}[]>>;
	users?: user[];
	setUsers?: React.Dispatch<React.SetStateAction<{}[]>>;
	customers?: any[];
	setCustomers?: React.Dispatch<React.SetStateAction<{}[]>>;
	isLoggedIn?: boolean;
	setIsloggedIn?: React.Dispatch<React.SetStateAction<{}[]>>;
	currentUser?: {};
	setCurrentUser?: React.Dispatch<React.SetStateAction<{}[]>>;
	handleOrderSearch?: (orderId: string) => order[];
	meals?: meal[]
}

export interface order {
	orderId?: string;
	amount?: number;
	status?: string;
	pending?: boolean
}
export interface meal {
	mealId?: string
	title?: string
	sold?: number
	remaining?: number
	price?: number
	img?: string
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


export const GlobalAppContext = React.createContext<globalContextType>({});