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
import { useState } from "react";
import { GlobalAppContext, meal, order } from "./types/props.types";
import { getMeals, getOrders } from "./lib/dummy-data";
import OrderList2 from "./routes/Oders/order-list-2.component";
import UserList from "./routes/Users/users.component";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [orders, setOrders] = useState<order[]>(getOrders());
  const [meals, setMeals] = useState<meal[]>(getMeals());
  const [users, setUsers] = useState([{}]);
  const [customers, setCustomers] = useState([{}]);
  console.log(orders);

  const handleOrderSearch = (orderId: string) => {
    //do something with id
    const order = orders.filter((order) => {
      if (order.orderId === orderId) return order;
    });
    return order;
  };

  const context = {
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
    handleOrderSearch,
    meals,
  };

  const handleOrderFilter = (state: string) => {
    //do something with state
  };

  return (
    <GlobalAppContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="customers" element={<CustomerList />} />
            <Route path="customers/:id" element={<CustomerDetail />} />
            <Route path="orders" element={<OrderList />}></Route>
            <Route path="orders/:orderid" element={<OrderDetail />} />
            <Route path="orders2" element={<OrderList2 />}></Route>
            <Route path="users" element={<UserList />}></Route>
            <Route
              path="*"
              element={
                <main className="text-white fs-bold h-screen flex justify-center items-center">
                  <p className="">There's nothing here!</p>
                </main>
              }
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </GlobalAppContext.Provider>
  );
}

export default App;
