import React from "react";

export type AppProps = {
	page?: JSX.Element,
	children?: any,
	index?: number,
	value?: number,
	orderData?: order[]
}

interface globalContextType {
	orders?: any[];
	setorders?: React.Dispatch<React.SetStateAction<{}[]>>;
	users?: any[];
	setUsers?: React.Dispatch<React.SetStateAction<{}[]>>;
	customers?: any[];
	setCustomers?: React.Dispatch<React.SetStateAction<{}[]>>;
	isLoggedIn?: boolean;
	setIsloggedIn?: React.Dispatch<React.SetStateAction<{}[]>>;
	currentUser?: {};
	setCurrentUser?: React.Dispatch<React.SetStateAction<{}[]>>;
	handleOrderSearch?: (orderId: string) => order[];
}

export interface order {
	orderId?: string;
	amount?: number;
	status?: string;
}

export const GlobalAppContext = React.createContext<globalContextType>({});