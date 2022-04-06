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
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
export function TablePaginationActions(props) {
    var theme = useTheme();
    var count = props.count, page = props.page, rowsPerPage = props.rowsPerPage, onPageChange = props.onPageChange;
    var handleFirstPageButtonClick = function (event) {
        onPageChange(event, 0);
    };
    var handleBackButtonClick = function (event) {
        onPageChange(event, page - 1);
    };
    var handleNextButtonClick = function (event) {
        onPageChange(event, page + 1);
    };
    var handleLastPageButtonClick = function (event) {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return (_jsxs(Box, __assign({ sx: { flexShrink: 0, ml: 2.5 } }, { children: [_jsx(IconButton, __assign({ onClick: handleFirstPageButtonClick, disabled: page === 0, "aria-label": "first page" }, { children: theme.direction === "rtl" ? _jsx(LastPageIcon, {}) : _jsx(FirstPageIcon, {}) })), _jsx(IconButton, __assign({ onClick: handleBackButtonClick, disabled: page === 0, "aria-label": "previous page" }, { children: theme.direction === "rtl" ? (_jsx(KeyboardArrowRight, {})) : (_jsx(KeyboardArrowLeft, {})) })), _jsx(IconButton, __assign({ onClick: handleNextButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1, "aria-label": "next page" }, { children: theme.direction === "rtl" ? (_jsx(KeyboardArrowLeft, {})) : (_jsx(KeyboardArrowRight, {})) })), _jsx(IconButton, __assign({ onClick: handleLastPageButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1, "aria-label": "last page" }, { children: theme.direction === "rtl" ? _jsx(FirstPageIcon, {}) : _jsx(LastPageIcon, {}) }))] })));
}
