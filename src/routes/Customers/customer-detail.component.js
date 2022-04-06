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
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { TabPanel, a11yProps, } from "../../components/Tabnav/tab-nav-utils.component";
import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
function CustomerDetailsTab() {
    var _a = React.useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (_jsxs(Box, __assign({ sx: { width: "100%" } }, { children: [_jsx(Box, __assign({ sx: { borderBottom: 1, borderColor: "divider" } }, { children: _jsxs(Tabs, __assign({ value: value, onChange: handleChange, "aria-label": "basic tabs example", className: "px-5 pt-5" }, { children: [_jsx(Tab, __assign({ label: "Personal Details" }, a11yProps(0))), _jsx(Tab, __assign({ label: "Orders" }, a11yProps(1))), _jsx(Tab, __assign({ label: "Actions" }, a11yProps(1)))] })) })), _jsx(TabPanel, __assign({ value: value, index: 0 }, { children: _jsxs("section", __assign({ className: "grid grid-cols-6 gap-5 mt-5 px-5" }, { children: [_jsxs("section", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Personal Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "First Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Last Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Last Order Location", variant: "outlined", size: "small", className: "col-span-3" })] }))] })), _jsxs("section", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Contact Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "Phone", variant: "outlined", size: "small", className: "col-span-3", inputProps: { inputMode: "numeric", pattern: "[0-9]*" } }), _jsx(TextField, { id: "outlined-basic", label: "Email", variant: "outlined", size: "small", className: "col-span-3" })] }))] }))] })) })), _jsx(TabPanel, __assign({ value: value, index: 1 }, { children: _jsx(CustomerOrderTable, {}) })), _jsx(TabPanel, __assign({ value: value, index: 2 }, { children: _jsx(ActionsNavigation, {}) }))] })));
}
function createData(name, calories, fat, carbs, protein) {
    return { name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}
var rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function CustomerOrderTable() {
    return (_jsx(TableContainer, __assign({ component: "div", className: "mt-5" }, { children: _jsxs(Table, __assign({ sx: { minWidth: 650 }, "aria-label": "simple table" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, __assign({ className: "font-bold pl-10" }, { children: "Order ID" })), _jsx(TableCell, __assign({ className: "font-bold", align: "center" }, { children: "Delivery Address" })), _jsx(TableCell, __assign({ className: "font-bold", align: "center" }, { children: "Company/Apartment" })), _jsx(TableCell, __assign({ className: "font-bold ", align: "center" }, { children: "Total Amount" })), _jsx(TableCell, __assign({ className: "font-bold", align: "center" }, { children: "Status" })), _jsx(TableCell, __assign({ className: "font-bold", align: "center" }, { children: "Tracking" })), _jsx(TableCell, __assign({ className: "font-bold", align: "center" }, { children: "Action" }))] }) }), _jsx(TableBody, { children: rows.map(function (row) { return (_jsxs(TableRow, { children: [_jsx(TableCell, __assign({ className: "pl-10 py-5", component: "th", scope: "row" }, { children: row.name })), _jsx(TableCell, __assign({ className: "py-5", align: "center" }, { children: row.calories })), _jsx(TableCell, __assign({ className: "py-5", align: "center" }, { children: row.fat })), _jsx(TableCell, __assign({ className: "py-5", align: "center" }, { children: row.carbs })), _jsx(TableCell, __assign({ className: "py-5", align: "center" }, { children: row.protein })), _jsx(TableCell, __assign({ className: "py-5", align: "center" }, { children: row.protein })), _jsx(TableCell, __assign({ className: "p-5", align: "center" }, { children: _jsx("span", __assign({ className: "text-blue-500 font-medium" }, { children: _jsx("a", __assign({ href: "/orders/1" }, { children: "view" })) })) }))] }, row.name)); }) })] })) })));
}
var ActionsNavigation = function (props) {
    var _a = React.useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (_jsxs(Box, __assign({ className: "p-5", sx: {
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            width: "100%",
        } }, { children: [_jsxs(Tabs, __assign({ orientation: "vertical", variant: "scrollable", value: value, onChange: handleChange, "aria-label": "Vertical tabs example", sx: { borderRight: 1, borderColor: "divider" } }, { children: [_jsx(Tab, __assign({ className: "capitalize", label: "Approve Details Change" }, a11yProps(0))), _jsx(Tab, __assign({ className: "capitalize", label: "Make Order" }, a11yProps(1)))] })), _jsx(TabPanel, __assign({ value: value, index: 0 }, { children: _jsx("div", __assign({ className: "p-5" }, { children: "Approve Change of Customer Details" })) })), _jsxs(TabPanel, __assign({ value: value, index: 1 }, { children: [_jsxs("div", __assign({ className: "p-5 grid grid-cols-6 gap-4" }, { children: [_jsxs("section", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Personal Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "First Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Last Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Email", variant: "outlined", size: "small", className: "col-span-3" })] }))] })), _jsxs("section", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Delivery Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "Delivery Address", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Company/Apartment No", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Note", variant: "outlined", size: "small", className: "col-span-6", multiline: true, rows: 10 })] }))] }))] })), _jsx("div", __assign({ className: "p-5 flex justify-end" }, { children: _jsx(Button, __assign({ size: "small", className: "bg-blue-500 ", variant: "contained" }, { children: "Save" })) }))] }))] })));
};
var CustomerDetail = function (props) {
    return (_jsxs("section", __assign({ className: "shadow rounded-lg bg-white h-full" }, { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5" }, { children: _jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "customerList" }, { children: "Customer Details" })) })), _jsx(CustomerDetailsTab, {})] })));
};
export default CustomerDetail;
