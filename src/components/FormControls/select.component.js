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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function BasicSelect(props) {
    var _a = React.useState(props.default), state = _a[0], setState = _a[1];
    var handleChange = function (event) {
        setState(event.target.value);
    };
    return (_jsxs(FormControl, __assign({ className: "w-60", variant: "standard" }, { children: [_jsx(InputLabel, __assign({ id: "demo-simple-select-label" }, { children: props.name })), _jsx(Select, __assign({ labelId: "demo-simple-select-label", id: "demo-simple-select", value: state, label: props.name, onChange: handleChange, className: "h-8" }, { children: props.items.map(function (i) { return (_jsx(MenuItem, __assign({ value: i }, { children: i }))); }) }))] })));
}
