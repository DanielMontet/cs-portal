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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
var SideNav = function (_a) {
    var isNavOpen = _a.isNavOpen, setIsNavOpen = _a.setIsNavOpen;
    var activeLinkProps = "bg-secondary text-white my-1 rounded-md px-5 py-2";
    var defaultLinkProps = "bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2";
    return (_jsxs(_Fragment, { children: [_jsxs("nav", __assign({ className: "sidenav transition-all ease-in-out duration-75 bg-white h-full ".concat(isNavOpen
                    ? "absolute w-3/4 z-50 top-0 sm:w-auto sm:relative sm:col-span-7"
                    : "hidden") }, { children: [isNavOpen && (_jsx("span", __assign({ className: "relative " }, { children: _jsx("img", { src: "/kune_landscape_logo.svg", className: "w-3/5 p-3  sm:hidden", alt: "" }) }))), _jsxs("div", __assign({ className: "flex flex-col ml-6 mr-4" }, { children: [_jsx("label", __assign({ className: "my-2 text-current font-medium" }, { children: "Dashboard" })), _jsx(NavLink, __assign({ to: "/", className: function (_a) {
                                    var isActive = _a.isActive;
                                    return isActive ? activeLinkProps : defaultLinkProps;
                                } }, { children: "Dashboard" })), _jsx(NavLink, __assign({ to: "/orders", className: function (_a) {
                                    var isActive = _a.isActive;
                                    return isActive ? activeLinkProps : defaultLinkProps;
                                } }, { children: "Order Management" })), _jsx(NavLink, __assign({ to: "/customers", className: function (_a) {
                                    var isActive = _a.isActive;
                                    return isActive ? activeLinkProps : defaultLinkProps;
                                } }, { children: "Customer Management" })), _jsx(NavLink, __assign({ to: "/users", className: function (_a) {
                                    var isActive = _a.isActive;
                                    return isActive ? activeLinkProps : defaultLinkProps;
                                } }, { children: "User Management" }))] }))] })), _jsx("div", { className: "mask ".concat(isNavOpen
                    ? "absolute z-40 opacity-50 w-screen h-screen bg-current top-0 sm:block sm:w-0 sm:h-0"
                    : "hidden"), onClick: function (e) { return setIsNavOpen(false); } })] }));
};
export default SideNav;
