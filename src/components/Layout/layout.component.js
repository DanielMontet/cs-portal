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
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Sidenav/sideNav.component";
var Layout = function () {
    var _a = useState(true), isNavOpen = _a[0], setIsNavOpen = _a[1];
    return (_jsxs("section", __assign({ className: "app-container h-screen grid grid-rows-48 \n        ".concat(isNavOpen && "overflow-hidden sm:overflow-auto", "\n      ") }, { children: [_jsx("header", __assign({ className: "app-header row-span-5 sm:row-span-4 grid grid-cols-48" }, { children: _jsxs("div", __assign({ className: "h-full flex items-center justify-between col-span-48 md:col-span-7 lg:col-span-7" }, { children: [_jsx("img", { 
                            // src="/kune_landscape_logo.svg"
                            src: "/logo-2.png", className: "hidden sm:block mx-6 sm:h-3/5 sm-w-3/5", 
                            // className="hidden sm:block sm:h-3/5 sm:w-3/5"
                            alt: "" }), _jsx("img", { src: "/menu.svg", alt: "", className: "h-1/5 w-1/5 cursor-pointer", onClick: function () { return setIsNavOpen(!isNavOpen); } })] })) })), _jsxs("section", __assign({ className: "app-main row-span-43 sm:row-span-44 grid grid-cols-48 " }, { children: [_jsx(SideNav, { isNavOpen: isNavOpen, setIsNavOpen: setIsNavOpen }), _jsxs("main", __assign({ className: "inner-app-container bg-blue-100 rounded-tl-lg p-3 sm:pt-6 sm:px-6 transition-all ease-in-out duration-75 min-w-fit sm:row-span-48  grid grid-rows-48 overfow-scroll ".concat(isNavOpen
                            ? "col-span-48 sm:col-span-41"
                            : "col-span-48 sm:col-span-48 ml-2 sm:ml-5") }, { children: [_jsx("span", __assign({ className: "scrollbar row-span-47 min-h-screen" }, { children: _jsx(Outlet, {}) })), _jsx("div", { className: "hidden sm:block sm:row-span-1  " })] }))] }))] })));
};
export default Layout;
