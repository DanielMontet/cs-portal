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
function createData(orderId, amount, status) {
    return { orderId: orderId, amount: amount, status: status };
}
var rows = [
    createData("asdasdas", 305, "received"),
    createData("asdsasda", 452, "prepared"),
    createData("dsfdsfas", 262, "allocated"),
    createData("Fasdasss", 159, "prepared"),
    createData("sadsadss", 356, "delivered"),
    createData("sadasdsa", 408, "prepared"),
    createData("asdsadaa", 237, "allocated"),
    createData("sadsasao", 375, "received"),
    createData("Kiddsfds", 518, "on its way"),
    createData("Lsdfsdf", 392, "received"),
    createData("asdsadasd", 318, "on its way"),
    createData("asdasdsad", 360, "delivered"),
    createData("sdfdsffd", 437, "on its way"),
];
export default function CustomerTable() {
    var _a = React.useState(0), page = _a[0], setPage = _a[1];
    var _b = React.useState(5), rowsPerPage = _b[0], setRowsPerPage = _b[1];
    // Avoid a layout jump when reaching the last page with empty rows.
    var emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (_jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ sx: { minWidth: 500 }, "aria-label": "custom pagination table" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Order ID" })) }), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Amount" })) })), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Status" })) })), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Action" })) }))] }) }), _jsxs(TableBody, { children: [(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows).map(function (row) { return (_jsxs(TableRow, { children: [_jsx(TableCell, __assign({ component: "th", scope: "row" }, { children: row.orderId })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.amount })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.status })), _jsx(TableCell, { style: { width: 160 }, align: "right" })] }, row.orderId)); }), emptyRows > 0 && (_jsx(TableRow, __assign({ style: { height: 53 * emptyRows } }, { children: _jsx(TableCell, { colSpan: 6 }) })))] }), _jsx(TableFooter, { children: _jsx(TableRow, { children: _jsx(TablePagination, { rowsPerPageOptions: [5, 10, 25, { label: "All", value: -1 }], colSpan: 3, count: rows.length, rowsPerPage: rowsPerPage, page: page, SelectProps: {
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage, ActionsComponent: TablePaginationActions }) }) })] })) })));
}
