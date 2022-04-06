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
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { TablePaginationActions } from "./table-utils";
export default function MealsTable(_a) {
    var mealsData = _a.mealsData;
    var _b = React.useState(0), page = _b[0], setPage = _b[1];
    var _c = React.useState(5), rowsPerPage = _c[0], setRowsPerPage = _c[1];
    // Avoid a layout jump when reaching the last page with empty rows.
    var emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - mealsData.length) : 0;
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (_jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ sx: { minWidth: 500 }, "aria-label": "custom pagination table" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Title" })) }), _jsx(TableCell, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Meal ID" })) }), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Sold" })) })), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Remaining" })) })), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Price" })) })), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Quantity" })) }))] }) }), _jsxs(TableBody, { children: [(rowsPerPage > 0
                            ? mealsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : mealsData).map(function (row) { return (_jsxs(TableRow, { children: [_jsx(TableCell, __assign({ component: "th", scope: "row" }, { children: _jsxs("span", __assign({ className: "flex items-center gap-5" }, { children: [_jsx("img", { className: "h-10 w-10 rounded-lg", src: row.img, alt: "" }), _jsx("p", { children: row.title })] })) })), _jsx(TableCell, __assign({ component: "th", scope: "row" }, { children: row.mealId })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.sold })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.remaining })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.price })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: _jsxs("span", __assign({ className: "flex gap-0 items-center justify-center" }, { children: [_jsx("button", __assign({ className: "bg-gray-200 border-x border-y border-gray-400 text-current font-medium text-sm px-3 py-2" }, { children: "-" })), _jsx("span", __assign({ className: "border-y border-gray-400 px-3 py-2", id: "" }, { children: "0" })), _jsx("button", __assign({ className: "bg-gray-200 border-x border-y border-gray-400 text-current font-medium text-sm px-3 py-2" }, { children: "+" }))] })) }))] }, row.mealId)); }), emptyRows > 0 && (_jsx(TableRow, __assign({ style: { height: 53 * emptyRows } }, { children: _jsx(TableCell, { colSpan: 6 }) })))] }), _jsx(TableFooter, { children: _jsx(TableRow, { children: _jsx(TablePagination, { rowsPerPageOptions: [5, 10, 25, { label: "All", value: -1 }], colSpan: 3, count: mealsData.length, rowsPerPage: rowsPerPage, page: page, SelectProps: {
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage, ActionsComponent: TablePaginationActions }) }) })] })) })));
}
