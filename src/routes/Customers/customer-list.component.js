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
import { Link } from "react-router-dom";
var CustomerList = function (props) {
    return (_jsxs("section", __assign({ className: "h-full shadow rounded-lg bg-white" }, { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5" }, { children: _jsx("label", __assign({ className: "text-current text-1xl font-medium", htmlFor: "customerList" }, { children: "Customer List" })) })), _jsxs("section", { children: [_jsx("section", __assign({ className: "w-full p-5" }, { children: _jsxs("span", __assign({ className: "border border-gray-400 rounded-lg grid grid-cols-6  w-96 hover:border-blue-500" }, { children: [_jsxs("div", __assign({ className: "grid grid-cols-6 col-span-4 items-center px-4 py-2" }, { children: [_jsx("img", { src: "/search.png", alt: "", className: "h-3 col-span-1" }), _jsx("input", { className: "border-0 outline-0 col-span-5", type: "text" })] })), _jsx("button", __assign({ className: "bg-secondary text-sm text-white font-medium col-span-2 rounded-r-lg" }, { children: "Search" }))] })) })), _jsx("section", __assign({ className: "w-full" }, { children: _jsxs("table", __assign({ className: "w-full" }, { children: [_jsx("thead", __assign({ className: "border-b border-gray-200 w-full" }, { children: _jsxs("tr", { children: [_jsx("th", __assign({ className: "p-6 text-left text-sm" }, { children: "Customer Name" })), _jsx("th", __assign({ className: "p-6 text-left text-sm" }, { children: "Phone" })), _jsx("th", __assign({ className: "p-6 text-left text-sm" }, { children: "Orders" })), _jsx("th", __assign({ className: "p-6 text-left text-sm" }, { children: "Location" })), _jsx("th", __assign({ className: "p-6 text-left text-sm" }, { children: "Action" }))] }) })), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "victor Cheboi" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "15" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "johnson Paints" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "13" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Victor Bashir" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "1" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "loius Moreno" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "55" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Brian Alfred" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "70" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Aaron Kipkorir" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "1" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Mary Nyagaka" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "39" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Damaris Cheptoo" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "70" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Madeline Waweru" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "100" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] }), _jsxs("tr", { children: [_jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: _jsx(Link, __assign({ to: "/customers/1", className: "text-blue-500" }, { children: "Johnson Jr" })) })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Phone" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "45" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Location" })), _jsx("td", __assign({ className: "p-6 text-left text-sm border-b border-gray-200" }, { children: "Action" }))] })] })] })) }))] })] })));
};
export default CustomerList;