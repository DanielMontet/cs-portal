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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="users" element={<UsersManagement />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="orders" element={<OrderList />}></Route>
          <Route path="order-detail/:orderid" element={<OrderDetail />} />
          <Route path="customer-detail" element={<CustomerDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route
            path="*"
            element={
              <main className="bg-blue-100 text-white fs-bold h-screen">
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
