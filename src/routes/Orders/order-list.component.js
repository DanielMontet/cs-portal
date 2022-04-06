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
import { GlobalAppContext } from "../../types/props.types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataTable from "../../components/Table/order-table.component";
import { useContext, useState } from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BasicSelect from "../../components/FormControls/select.component";
import MealsTable from "../../components/Table/meals-table.component";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
var CustomerOrderForm = function () {
    return (_jsxs("section", { children: [_jsxs("div", __assign({ className: "p-5 grid grid-cols-6 gap-4" }, { children: [_jsxs("section", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Personal Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "First Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Last Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Email", variant: "outlined", size: "small", className: "col-span-3" })] }))] })), _jsxs("section", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Delivery Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "Delivery Address", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Company/Apartment No", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Note", variant: "outlined", size: "small", className: "col-span-6", multiline: true, rows: 10 })] }))] }))] })), _jsx("div", __assign({ className: "p-5 flex justify-end" }, { children: _jsx(Button, __assign({ size: "small", className: "bg-blue-500 ", variant: "contained" }, { children: "Save" })) }))] }));
};
var OrderPanel = function (_a) {
    var mealsData = _a.mealsData;
    var _b = useState({ count: 5 }), cart = _b[0], setCart = _b[1];
    var _c = useState({}), userDetails = _c[0], setUserDetails = _c[1];
    return (_jsx("form", { children: _jsxs("section", __assign({ className: "p-5" }, { children: [_jsx("header", __assign({ className: "flex justify-between items-center" }, { children: _jsx("p", __assign({ className: "text-slate-700 font-medium" }, { children: "Make Order" })) })), _jsxs("section", __assign({ className: "grid grid-cols-48" }, { children: [_jsx("section", __assign({ className: "col-span-45" }, { children: _jsxs(Tabs, __assign({ className: "mt-5" }, { children: [_jsxs(TabList, { children: [_jsx(Tab, { children: _jsx("p", __assign({ className: "text-sm font-medium text-slate-700" }, { children: "Meals" })) }), _jsx(Tab, { children: _jsx("p", __assign({ className: "text-sm font-medium text-slate-700" }, { children: "Customer details" })) }), _jsx(Tab, { children: _jsx("p", __assign({ className: "text-sm font-medium text-slate-700" }, { children: "Order fulfilment" })) })] }), _jsx(TabPanel, { children: _jsxs("section", __assign({ className: "mt-5 flex-col gap-5 px-3" }, { children: [_jsxs("section", __assign({ className: "flex items-center gap-8 " }, { children: [_jsx(BasicSelect, { name: "Hubs", default: "Maua", items: ["MAUA", "THIKA ROAD", "SAMEER", "CBD"] }), _jsxs(FormControl, __assign({ variant: "standard" }, { children: [_jsx(InputLabel, __assign({ htmlFor: "input-with-icon-adornment" }, { children: "Meal" })), _jsx(Input, { id: "input-with-icon-adornment" })] })), _jsx("button", __assign({ className: "rounded-lg bg-blue-500 px-5 py-3 text-white text-sm" }, { children: "search" }))] })), _jsx(MealsTable, { mealsData: mealsData })] })) }), _jsx(TabPanel, { children: _jsx("section", { children: _jsx(CustomerOrderForm, {}) }) }), _jsx(TabPanel, { children: _jsx("section", {}) })] })) })), _jsx("section", __assign({ className: "col-span-3" }, { children: _jsxs("div", __assign({ className: "relative absolute right-8 top-8 " }, { children: [_jsx("img", { src: "/shopping-cart.png", className: "h-5", alt: "" }), _jsx("span", __assign({ className: "".concat(cart.count ? "bg-orange-500 w-5 h-5 rounded-full" : "", " absolute flex bottom-4 left-3 font-bold p-3 justify-center items-center font-bold text-sm text-white") }, { children: _jsx("p", { children: cart.count }) }))] })) }))] }))] })) }));
};
var OrderList = function () {
    var _a = useContext(GlobalAppContext), orders = _a.orders, meals = _a.meals;
    var _b = useState(false), showOrderForm = _b[0], setShowOrderForm = _b[1];
    var content;
    if (showOrderForm) {
        content = _jsx(OrderPanel, { mealsData: meals });
    }
    else {
        content = _jsx(DataTable, { orderData: orders });
    }
    return (_jsxs("section", __assign({ className: "min-h-fit h-full shadow rounded-lg bg-white flex flex-col" }, { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5 min-w-fit" }, { children: _jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "customerList" }, { children: "Orders" })) })), _jsxs("section", __assign({ className: "min-w-fit" }, { children: [_jsx("section", __assign({ className: "w-full p-5" }, { children: _jsxs("section", __assign({ className: "flex gap-5" }, { children: [_jsxs(FormControl, __assign({ variant: "standard" }, { children: [_jsx(InputLabel, __assign({ htmlFor: "input-with-icon-adornment" }, { children: "Order Id" })), _jsx(Input, { id: "input-with-icon-adornment" })] })), _jsxs(FormControl, __assign({ variant: "standard" }, { children: [_jsx(InputLabel, __assign({ htmlFor: "input-with-icon-adornment" }, { children: "Phone Number" })), _jsx(Input, { id: "input-with-icon-adornment" })] })), _jsxs(FormControl, __assign({ variant: "standard" }, { children: [_jsx(InputLabel, __assign({ htmlFor: "input-with-icon-adornment", shrink: true }, { children: "Date" })), _jsx(Input, { type: "date" })] })), _jsx("button", __assign({ className: "rounded-lg bg-blue-500 px-5 text-white text-sm" }, { children: "search" })), _jsx("button", __assign({ className: "rounded-lg bg-purple-600 px-5 text-white text-sm" }, { children: "reset all" })), _jsx("button", __assign({ className: "rounded-lg bg-blue-500 px-5 text-white text-sm", onClick: function (e) { return setShowOrderForm(!showOrderForm); } }, { children: "make order" }))] })) })), _jsx("section", __assign({ className: "w-full" }, { children: content }))] }))] })));
};
export default OrderList;
