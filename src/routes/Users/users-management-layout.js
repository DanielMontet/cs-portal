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
import { Link, NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
var UserManagementLayout = function () {
    var activeLinkProps = "text-secondary font-medium hover:text-blue-700";
    var defaultLinkProps = "text-slate-400 font-medium hover:text-secondary";
    return (_jsxs("section", __assign({ className: "h-full flex flex-col gap-8" }, { children: [_jsxs("nav", __assign({ className: "bg-white w-full flex rounded-lg shadow items-center justify-between p-5" }, { children: [_jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "UserList" }, { children: "User Management" })), _jsxs("section", __assign({ className: "flex items-center gap-2 text-sm mr-20" }, { children: [_jsx(Link, __assign({ to: "/" }, { children: _jsx(HomeIcon, { fontSize: "small", color: "action" }) })), _jsx("span", __assign({ className: "text-slate-500 text-sm" }, { children: "/" })), _jsx(NavLink, __assign({ className: function (_a) {
                                    var isActive = _a.isActive;
                                    return isActive ? activeLinkProps : defaultLinkProps;
                                }, to: "/users" }, { children: "Users" }))] }))] })), _jsx("section", __assign({ className: "w-full" }, { children: _jsx(Outlet, {}) }))] })));
};
export default UserManagementLayout;
