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
import { useContext, useState } from "react";
import UserListTable from "../../components/Table/users-table.component";
import { TabPanel, a11yProps, } from "../../components/Tabnav/tab-nav-utils.component";
import { GlobalAppContext } from "../../types/props.types";
import AddUser from "./add-user.component";
var UserManagementTab = function () {
    var _a = useState(0), value = _a[0], setValue = _a[1];
    var users = useContext(GlobalAppContext).users;
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (_jsxs(Box, __assign({ sx: { width: "100%" } }, { children: [_jsx(Box, __assign({ sx: { borderBottom: 1, borderColor: "divider" } }, { children: _jsxs(Tabs, __assign({ value: value, onChange: handleChange, "aria-label": "basic tabs example", className: "px-5 pt-5" }, { children: [_jsx(Tab, __assign({ label: "Users" }, a11yProps(0))), _jsx(Tab, __assign({ label: "Add User" }, a11yProps(1)))] })) })), _jsxs(TabPanel, __assign({ value: value, index: 0 }, { children: [_jsx("section", __assign({ className: "w-full p-5" }, { children: _jsxs("span", __assign({ className: "border border-gray-400 rounded-lg grid grid-cols-6  w-96 hover:border-blue-500" }, { children: [_jsxs("div", __assign({ className: "grid grid-cols-6 col-span-4 items-center px-4 py-2" }, { children: [_jsx("img", { src: "/search.png", alt: "", className: "h-3 col-span-1" }), _jsx("input", { className: "border-0 outline-0 col-span-5", type: "text" })] })), _jsx("button", __assign({ className: "bg-secondary text-sm text-white font-medium col-span-2 rounded-r-lg" }, { children: "Search" }))] })) })), _jsx(UserListTable, { userData: users })] })), _jsx(TabPanel, __assign({ value: value, index: 1 }, { children: _jsx(AddUser, {}) }))] })));
};
var UserList = function (props) {
    return (_jsxs("section", __assign({ className: "h-full shadow rounded-lg bg-white" }, { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5" }, { children: _jsx("label", __assign({ className: "text-current text-sm font-medium", htmlFor: "UserList" }, { children: "List / Add Users" })) })), _jsx("section", __assign({ className: "w-full" }, { children: _jsx(UserManagementTab, {}) }))] })));
};
export default UserList;
