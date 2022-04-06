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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext, useState } from "react";
import { getFormatedDate } from "../../lib/get-formated-date";
import { GlobalAppContext } from "../../types/props.types";
var CommentsList = function () {
    var comments = useContext(GlobalAppContext).comments;
    if (comments.length === 0) {
        return (_jsx(React.Fragment, { children: _jsx("p", { children: "Add a comment" }) }));
    }
    return (_jsx(React.Fragment, { children: comments === null || comments === void 0 ? void 0 : comments.map(function (comment, index) { return (_jsxs(React.Fragment, { children: [_jsxs("header", __assign({ className: "flex items-center gap-3" }, { children: [_jsx("img", { src: "https://picsum.photos/200/200", id: "userImg", className: "h-12 rounded-full", alt: "" }), _jsx("label", __assign({ htmlFor: "userImg", className: "text-sm text-current font-medium" }, { children: comment.userName })), _jsx("div", { className: "bg-gray-100 rounded-full h-0 5" }), _jsx("span", __assign({ className: "text-slate-400 text-sm" }, { children: comment.date }))] })), _jsx("section", { children: _jsx("p", __assign({ className: "text-slate-700 py-5" }, { children: comment.notes })) })] }, index)); }) }));
};
var CommentsForm = function () {
    var _a = useContext(GlobalAppContext), comments = _a.comments, setComments = _a.setComments;
    var _b = useState(null), query = _b[0], setQuery = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (query) {
            var comment = {
                id: "".concat(comments === null || comments === void 0 ? void 0 : comments.length),
                date: getFormatedDate(new Date()),
                notes: query,
                userName: "John Doe",
            };
            setComments(__spreadArray(__spreadArray([], comments, true), [comment], false));
        }
        // handle error and validate
    };
    return (_jsxs(React.Fragment, { children: [_jsx("img", { src: "https://picsum.photos/200/200", className: "h-12 rounded-full col-span-3", alt: "" }), _jsxs("form", __assign({ className: "flex items-center col-span-45 gap-3", onSubmit: function (e) { return handleSubmit(e); } }, { children: [_jsx("textarea", { className: "border border-slate-300 rounded-lg w-10/12 outline-0 focus:border-blue-300 p-5", name: "addComment", id: "addComment", rows: 3, onChange: function (e) { return setQuery(e.target.value); } }), _jsx("button", __assign({ className: "bg-secondary hover:bg-blue-600 text-white w-2/12 rounded-lg px-2 py-3", type: "submit" }, { children: "Add note" }))] }))] }));
};
var OrderCommentSection = function () {
    return (_jsxs(React.Fragment, { children: [_jsx("header", __assign({ className: "border-b border-gray-200 p-5 flex justify-between" }, { children: _jsx("label", __assign({ className: "text-current font-medium text-1xl ", htmlFor: "" }, { children: "CS Order Notes" })) })), _jsxs("main", __assign({ className: "p-5" }, { children: [_jsx("section", __assign({ className: "flex flex-col w-4/5" }, { children: _jsx(CommentsList, {}) })), _jsx("section", __assign({ className: "grid grid-cols-48 items-center gap-5 w-4/5 mt-5" }, { children: _jsx(CommentsForm, {}) }))] }))] }));
};
export default OrderCommentSection;
