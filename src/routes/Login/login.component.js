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
var Login = function (props) {
    return (_jsx("section", __assign({ className: "h-screen bg-blue-100 flex justify-center" }, { children: _jsxs("main", __assign({ className: "my-40 bg-white w-1/3 flex flex-col justify-center rounded-lg px-5 shadow" }, { children: [_jsxs("header", __assign({ className: "w-full mb-5 flex flex-col items-center" }, { children: [_jsx("img", { className: "max-h-12", src: "/kune_landscape_logo.svg", alt: "" }), _jsx("h1", __assign({ className: "text-3xl font-extrabold text-gray-700" }, { children: "Login into your account" }))] })), _jsx("section", __assign({ className: "w-full flex " }, { children: _jsxs("form", __assign({ className: "w-full p-3" }, { children: [_jsxs("div", __assign({ className: "input-group flex flex-col mb-3" }, { children: [_jsx("label", __assign({ className: "mb-2", htmlFor: "email" }, { children: "Email" })), _jsx("input", { className: "rounded border border-solid border-slate-300 hover:border-blue-500 focus:outline-blue-500 py-2 px-4", type: "text", id: "email", autoComplete: "on" })] })), _jsxs("div", __assign({ className: "input-group flex flex-col mb-4" }, { children: [_jsx("label", __assign({ className: "mb-2", htmlFor: "password" }, { children: "Password" })), _jsx("input", { className: "rounded border border-solid border-slate-300 hover:border-blue-500 focus:outline-blue-500 py-2 px-4", type: "password", id: "password" })] })), _jsxs("div", __assign({ className: "flex mb-3 items-center justify-between" }, { children: [_jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("input", { className: "mr-3 ml-1 p-2", type: "checkbox", name: "", id: "rememberMe" }), _jsx("label", __assign({ className: "text-sm", htmlFor: "rememberMe" }, { children: "Remember me" }))] })), _jsxs("a", __assign({ href: "/reset-password", className: "text-sm text-blue-500" }, { children: [" ", "Forgot password?"] }))] })), _jsx("button", __assign({ className: "w-full bg-blue-600 text-white rounded py-2 px-4 " }, { children: "Submit" }))] })) }))] })) })));
};
export default Login;
