var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { useState } from "react";
import { GlobalAppContext, } from "./types/props.types";
import { getMeals, getOrders, getUsers } from "./lib/dummy-data";
import UserList from "./routes/Users/users.component";
import UserDetail from "./routes/Users/user-detailcomponent";
import UserManagementLayout from "./routes/Users/users-management-layout";
import OrderManagementLayout from "./routes/Orders/order-management-layout.component";
import OrderList from "./routes/Orders/order-list.component";
function App() {
    var _a = useState(false), isLoggedIn = _a[0], setIsLoggedIn = _a[1];
    var _b = useState({}), currentUser = _b[0], setCurrentUser = _b[1];
    var _c = useState(getOrders()), orders = _c[0], setOrders = _c[1];
    var _d = useState(getMeals()), meals = _d[0], setMeals = _d[1];
    var _e = useState(getUsers), users = _e[0], setUsers = _e[1];
    var _f = useState(null), customers = _f[0], setCustomers = _f[1];
    var _g = useState([]), comments = _g[0], setComments = _g[1];
    var handleOrderSearch = function (orderId) {
        //do something with id
        var order = orders.filter(function (order) {
            if (order.orderId === orderId)
                return order;
        });
        return order;
    };
    var context = {
        orders: orders,
        setOrders: setOrders,
        users: users,
        setUsers: setUsers,
        customers: customers,
        setCustomers: setCustomers,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        handleOrderSearch: handleOrderSearch,
        meals: meals,
        comments: comments,
        setComments: setComments,
    };
    var handleOrderFilter = function (state) {
        //do something with state
    };
    return (_jsx(GlobalAppContext.Provider, __assign({ value: context }, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsxs(Route, __assign({ path: "/", element: _jsx(Layout, {}) }, { children: [_jsx(Route, { index: true, element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "users", element: _jsx(UsersManagement, {}) }), _jsx(Route, { path: "customers", element: _jsx(CustomerList, {}) }), _jsx(Route, { path: "customers/:customerId", element: _jsx(CustomerDetail, {}) }), _jsxs(Route, __assign({ path: "orders", element: _jsx(OrderManagementLayout, {}) }, { children: [_jsx(Route, { index: true, element: _jsx(OrderList, {}) }), _jsx(Route, { path: ":orderId", element: _jsx(OrderDetail, {}) })] })), _jsxs(Route, __assign({ path: "users", element: _jsx(UserManagementLayout, {}) }, { children: [_jsx(Route, { index: true, element: _jsx(UserList, {}) }), _jsx(Route, { path: ":userId", element: _jsx(UserDetail, {}) })] })), _jsx(Route, { path: "*", element: _jsx("main", __assign({ className: "text-white fs-bold h-screen flex justify-center items-center" }, { children: _jsx("p", __assign({ className: "" }, { children: "There's nothing here!" })) })) })] })), _jsx(Route, { path: "login", element: _jsx(Login, {}) }), _jsx(Route, { path: "reset-password", element: _jsx(ResetPassword, {}) })] }) }) })));
}
export default App;
