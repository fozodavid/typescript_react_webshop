"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./CheckBox.css");
const CheckBox = ({ name, options, handler }) => {
    // todo: is this a form group?
    return ((0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("h2", { children: name }), options.map(option => {
                return ((0, jsx_runtime_1.jsxs)("div", { className: "checkbox", children: [(0, jsx_runtime_1.jsx)("input", { onChange: handler, name: name, type: "checkbox", id: option }), (0, jsx_runtime_1.jsx)("label", { htmlFor: option, className: "form-label", children: option })] }, option));
            })] }));
};
exports.default = CheckBox;
//# sourceMappingURL=CheckBox.js.map