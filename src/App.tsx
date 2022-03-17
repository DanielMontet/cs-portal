import "./App.css";
import Layout from "./components/Layout/layout.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard/dashboard.component";
import UsersManagement from "./routes/Users/users.component";
import CustomerList from "./routes/Customers/customer-list.component";
import OrderList from "./routes/Oders/order-list.component";
import Login from "./routes/Login/login.component";
import ResetPassword from "./routes/ResetPassword/reset-password.component";
import OrderDetail from "./routes/Oders/order-detail";
import CustomerDetail from "./routes/Customers/customer-detail.component";
import React, { useState } from "react";

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
}

export const GlobalAppContext = React.createContext<globalContextType>({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [orders, setOrders] = useState([{}]);
  const [users, setUsers] = useState([{}]);
  const [customers, setCustomers] = useState([{}]);
  const state = {
    orders,
    setOrders,
    users,
    setUsers,
    customers,
    setCustomers,
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
  };

  return (
    <GlobalAppContext.Provider value={state}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="customers" element={<CustomerList />} />
            <Route path="customers/:id" element={<CustomerDetail />} />
            <Route path="orders" element={<OrderList />}></Route>
            <Route path="order-detail/:orderid" element={<OrderDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route
              path="*"
              element={
                <main className="text-white fs-bold h-screen flex justify-center items-center">
                  <p className="">There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalAppContext.Provider>
  );
}

export default App;
