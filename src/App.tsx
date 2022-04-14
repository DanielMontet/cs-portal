import "./App.css";
import Layout from "./components/Layout/layout.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard/dashboard.component";
import UsersManagement from "./routes/Users/users.component";
import CustomerList from "./routes/Customers/customer-list.component";
import Login from "./routes/Login/login.component";
import ResetPassword from "./routes/ResetPassword/reset-password.component";
import OrderDetail from "./routes/Orders/order-detail";
import CustomerDetail from "./routes/Customers/customer-detail.component";
import { useEffect, useState } from "react";
import {
  cartItem,
  comment,
  GlobalAppContext,
  meal,
  order,
  user,
} from "./types/props.types";
import { getMeals, getOrders, getUsers } from "./lib/dummy-data";
import UserList from "./routes/Users/users.component";
import UserDetail from "./routes/Users/user-detailcomponent";
import UserManagementLayout from "./routes/Users/users-management-layout";
import OrderManagementLayout from "./routes/Orders/order-management-layout.component";
import OrderList from "./routes/Orders/order-list.component";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [orders, setOrders] = useState<order[]>(getOrders());
  const [meals, setMeals] = useState<meal[]>(getMeals());
  const [users, setUsers] = useState<user[]>(getUsers);
  const [customers, setCustomers] = useState<any>(null);
  const [comments, setComments] = useState<comment[] | undefined>([]);
  const [cart, setCart] = useState<cartItem[]>([]);
  const [customerDetails, setCustomerDetails] = useState<{}>(null);

  const handleAddToCart = ({ mealId, title, price }: meal) => {
    // update cart item if its already in cart
    let item = cart!.filter((i) => {
      return i.mealId === mealId;
    });

    let newCart = cart!.filter((i) => {
      return i.mealId !== mealId;
    });

    if (item[0]) {
      item[0].quantity++;
      return setCart([...newCart, item[0]]);
    }

    // create a cart item from a meal if its not in cart
    let cartItem: cartItem = { mealId, title, price, quantity: 1 };
    return setCart([...newCart, cartItem]);
  };

  const handleSubtractFromCart = (meal: meal) => {};

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
    meals,
    comments,
    setComments,
    handleAddToCart,
    handleSubtractFromCart,
    cart,
    setCart,
    setCustomerDetails,
    customerDetails,
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
            <Route path="customers/:customerId" element={<CustomerDetail />} />
            <Route path="orders" element={<OrderManagementLayout />}>
              <Route index element={<OrderList />} />
              <Route path=":orderId" element={<OrderDetail />} />
            </Route>

            <Route path="users" element={<UserManagementLayout />}>
              <Route index element={<UserList />}></Route>
              <Route path=":userId" element={<UserDetail />}></Route>
            </Route>
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
