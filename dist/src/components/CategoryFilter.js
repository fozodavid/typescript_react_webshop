"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CategoryFilter = ({ categories, handler }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "form-group", children: (0, jsx_runtime_1.jsx)("select", { className: "form-control", name: "categories", onChange: e => handler(e), children: categories.map(category => (0, jsx_runtime_1.jsx)("option", { value: category, children: category }, category)) }) }));
};
exports.default = CategoryFilter;
//# sourceMappingURL=CategoryFilter.js.map