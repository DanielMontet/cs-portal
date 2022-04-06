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
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { a11yProps, TabPanel, } from "../../components/Tabnav/tab-nav-utils.component";
export var AddOrEditUserForm = function (_a) {
    var editUser = _a.editUser;
    return (_jsxs("form", __assign({ className: "grid grid-cols-6 gap-5 mt-5 px-5", onSubmit: function (e) { return e.preventDefault(); } }, { children: [_jsxs("div", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Personal Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "First Name", variant: "outlined", size: "small", className: "col-span-3" }), _jsx(TextField, { id: "outlined-basic", label: "Last Name", variant: "outlined", size: "small", className: "col-span-3" })] }))] })), _jsxs("div", __assign({ className: "border border-blue-200 col-span-3 p-5 rounded-lg" }, { children: [_jsx("label", { children: "Contact Information" }), _jsxs("div", __assign({ className: "mt-4 grid grid-cols-6 gap-4" }, { children: [_jsx(TextField, { id: "outlined-basic", label: "Phone", variant: "outlined", size: "small", className: "col-span-3", inputProps: { inputMode: "numeric", pattern: "[0-9]*" } }), _jsx(TextField, { id: "outlined-basic", label: "Email", variant: "outlined", size: "small", className: "col-span-3" })] }))] })), _jsxs("div", __assign({ className: "col-span-6 flex gap-3 justify-end" }, { children: [editUser && (_jsx(Button, __assign({ color: "secondary", variant: "contained", size: "small" }, { children: "Edit" }))), _jsx(Button, __assign({ variant: "contained", size: "small", className: "" }, { children: "Save" }))] }))] })));
};
function UserDetailsTab() {
    var _a = useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (_jsxs(Box, __assign({ sx: { width: "100%" } }, { children: [_jsx(Box, __assign({ sx: { borderBottom: 1, borderColor: "divider" } }, { children: _jsxs(Tabs, __assign({ value: value, onChange: handleChange, "aria-label": "basic tabs example", className: "px-5 pt-5" }, { children: [_jsx(Tab, __assign({ label: "Personal Details" }, a11yProps(0))), _jsx(Tab, __assign({ label: "Actions" }, a11yProps(1)))] })) })), _jsx(TabPanel, __assign({ value: value, index: 0 }, { children: _jsx(AddOrEditUserForm, { editUser: true }) })), _jsx(TabPanel, __assign({ value: value, index: 1 }, { children: _jsx("section", __assign({ className: "p-5" }, { children: _jsx(Link, __assign({ to: "/reset-password", className: "text-blue-500 hover:text-blue-600" }, { children: "Reset password" })) })) }))] })));
}
var UserDetail = function () {
    return (_jsxs("section", __assign({ className: "shadow bg-white rounded-lg h-full" }, { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5 min-w-fit" }, { children: _jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "customerList" }, { children: "User details" })) })), _jsx("section", __assign({ className: "p-5" }, { children: _jsx(UserDetailsTab, {}) }))] })));
};
export default UserDetail;
