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
import { Link } from "react-router-dom";
import OrderItemsTable from "../../components/Table/order-items-table.component";
import OrderCommentSection from "./order-comment.component";
var OrderDetail = function (props) {
    var date = useState(new Date())[0];
    return (_jsxs("section", __assign({ className: "max-h-fit min-w-1000 grid grid-cols-6 gap-5 grid-rows-6 sm:grid-rows-none" }, { children: [_jsxs("section", __assign({ className: "shadow rounded-lg col-span-6 sm:col-span-4 bg-white row-span-2 " }, { children: [_jsxs("header", __assign({ className: "border-b border-gray-200 p-5 flex justify-between" }, { children: [_jsx("label", __assign({ className: "text-current font-medium text-1xl ", htmlFor: "" }, { children: "Order Details" })), _jsxs("div", __assign({ className: "flex gap-24 items-center" }, { children: [_jsxs("div", __assign({ className: "flex gap-2" }, { children: [_jsx("label", __assign({ className: "text-slate-700 text-1xl font-medium", htmlFor: "customerList" }, { children: "Order ID:" })), _jsx("p", __assign({ className: "text-slate-500 font-medium text-1xl" }, { children: "jnkjbsdb" }))] })), _jsx("label", __assign({ className: "rounded-lg px-3 py-1 bg-green-600 text-white animate-pulse text-sm font-medium", htmlFor: "customerList" }, { children: "Order received" }))] }))] })), _jsxs("main", { children: [_jsx("div", __assign({ className: "p-5" }, { children: _jsx(OrderItemsTable, {}) })), _jsxs("div", __assign({ className: "p-5 grid grid-cols-6 gap-5 sm:gap-48" }, { children: [_jsxs("div", __assign({ className: "col-span-3" }, { children: [_jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Received at:" })), _jsxs("span", __assign({ className: "col-span-3 flex items-center gap-5" }, { children: [_jsx("p", __assign({ className: " text-slate-600 text-sm text-right" }, { children: "".concat(date.getDate(), "-").concat(date.getMonth(), "-").concat(date.getFullYear()) })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "  ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds()) }))] }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Allocated at:" })), _jsxs("span", __assign({ className: "col-span-3 flex items-center gap-5" }, { children: [_jsx("p", __assign({ className: " text-slate-600 text-sm text-right" }, { children: "".concat(date.getDate(), "-").concat(date.getMonth(), "-").concat(date.getFullYear()) })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "  ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds()) }))] }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Picked up at:" })), _jsxs("span", __assign({ className: "col-span-3 flex items-center gap-5" }, { children: [_jsx("p", __assign({ className: " text-slate-600 text-sm text-right" }, { children: "".concat(date.getDate(), "-").concat(date.getMonth(), "-").concat(date.getFullYear()) })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "  ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds()) }))] }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Arrived Locale at:" })), _jsxs("span", __assign({ className: "col-span-3 flex items-center gap-5" }, { children: [_jsx("p", __assign({ className: " text-slate-600 text-sm text-right" }, { children: "".concat(date.getDate(), "-").concat(date.getMonth(), "-").concat(date.getFullYear()) })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "  ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds()) }))] }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Delivered at:" })), _jsxs("span", __assign({ className: "col-span-3 flex items-center gap-5" }, { children: [_jsx("p", __assign({ className: " text-slate-600 text-sm text-right" }, { children: "".concat(date.getDate(), "-").concat(date.getMonth(), "-").concat(date.getFullYear()) })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "  ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds()) }))] }))] }))] })), _jsxs("div", __assign({ className: "col-span-3" }, { children: [_jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Delivery cost:" })), _jsx("p", __assign({ className: "col-span-3 text-slate-600 text-sm text-right" }, { children: "300" }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Cutlery cost:" })), _jsx("p", __assign({ className: "col-span-3 text-slate-600 text-sm text-right" }, { children: "20" }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Total:" })), _jsx("p", __assign({ className: "col-span-3 text-slate-600 text-sm text-right" }, { children: "500" }))] })), _jsxs("span", __assign({ className: "w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200" }, { children: [_jsx("label", __assign({ className: "text-slate-800 font-medium text-sm col-span-3", htmlFor: "" }, { children: "Overall Cost(KES):" })), _jsx("p", __assign({ className: "col-span-3 text-slate-600 text-sm text-right" }, { children: "8000" }))] }))] }))] }))] })] })), _jsxs("section", __assign({ className: "shadow rounded-lg col-span-6 sm:col-span-2 bg-white row-span-2 " }, { children: [_jsxs("section", { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5" }, { children: _jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "customerList" }, { children: "Customer Details" })) })), _jsxs("main", __assign({ className: "p-5 flex flex-col gap-2" }, { children: [_jsxs("span", __assign({ className: "flex gap-4" }, { children: [_jsx("label", __assign({ className: "  text-sm font-medium", htmlFor: "" }, { children: "Name:" })), _jsx("p", __assign({ className: "text-secondary hover:text-blue-600 text-sm" }, { children: _jsx(Link, __assign({ to: "/customers/1" }, { children: "Daniel Montet" })) }))] })), _jsxs("span", __assign({ className: "flex gap-4" }, { children: [_jsx("label", __assign({ className: "text-slate-700 text-sm font-medium", htmlFor: "" }, { children: "Email:" })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "dmontetproff@gmail.com" }))] })), _jsxs("span", __assign({ className: "flex gap-4" }, { children: [_jsx("label", __assign({ className: "text-slate-700 text-sm font-medium", htmlFor: "" }, { children: "Phone:" })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "+254 702 644 342" }))] }))] }))] }), _jsxs("section", { children: [_jsx("header", __assign({ className: "border-y border-gray-200 p-5" }, { children: _jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "customerList" }, { children: "Delivery Information" })) })), _jsxs("main", __assign({ className: "p-5 flex flex-col gap-2" }, { children: [_jsxs("span", __assign({ className: "flex gap-4" }, { children: [_jsx("label", __assign({ className: "text-slate-700 text-sm font-medium", htmlFor: "" }, { children: "Delivery Address:" })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "River Road" }))] })), _jsxs("span", __assign({ className: "flex gap-4" }, { children: [_jsx("label", __assign({ className: "text-slate-700 text-sm font-medium", htmlFor: "" }, { children: "Company/Apartment No:" })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "+254 702 644 342" }))] })), _jsxs("span", __assign({ className: "flex flex-col gap-1" }, { children: [_jsx("label", __assign({ className: "text-slate-700 text-sm font-medium", htmlFor: "" }, { children: "Delivery Note:" })), _jsx("p", __assign({ className: "text-slate-600 text-sm" }, { children: "Kindly warm the food since. once the rider arrives at the gate i neeed him to hand the dishes to the gatekeeper. Ill take it from there. thanks." }))] }))] }))] })] })), _jsx("section", __assign({ className: "shadow col-span-6 rounded-lg h-full bg-white row-span-2 " }, { children: _jsx(OrderCommentSection, {}) }))] })));
};
export default OrderDetail;
