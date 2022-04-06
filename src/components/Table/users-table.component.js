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
import { Link } from "react-router-dom";
var UserListTable = function (_a) {
    var userData = _a.userData;
    var _b = useState(0), page = _b[0], setPage = _b[1];
    var _c = useState(5), rowsPerPage = _c[0], setRowsPerPage = _c[1];
    // Avoid a layout jump when reaching the last page with empty rows.
    var emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userData.length) : 0;
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (_jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ sx: { minWidth: 500 }, "aria-label": "custom pagination table" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "User ID" })) }), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Email" })) })), _jsx(TableCell, __assign({ align: "right" }, { children: _jsx("p", __assign({ className: "text-current font-bold" }, { children: "Name" })) }))] }) }), _jsxs(TableBody, { children: [(rowsPerPage > 0
                            ? userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : userData).map(function (row) { return (_jsxs(TableRow, { children: [_jsx(TableCell, __assign({ component: "th", scope: "row" }, { children: _jsx(Link, __assign({ className: "text-blue-700 hover:text-blue-500", to: "/users/".concat(row.id) }, { children: row.id }), row.id) })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.email })), _jsx(TableCell, __assign({ style: { width: 160 }, align: "right" }, { children: row.name }))] }, row.id)); }), emptyRows > 0 && (_jsx(TableRow, __assign({ style: { height: 53 * emptyRows } }, { children: _jsx(TableCell, { colSpan: 6 }) })))] }), _jsx(TableFooter, { children: _jsx(TableRow, { children: _jsx(TablePagination, { rowsPerPageOptions: [5, 10, 25, { label: "All", value: -1 }], colSpan: 3, count: userData.length, rowsPerPage: rowsPerPage, page: page, SelectProps: {
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage, ActionsComponent: TablePaginationActions }) }) })] })) })));
};
export default UserListTable;
