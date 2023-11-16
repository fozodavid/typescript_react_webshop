"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CategoryFilter_1 = __importDefault(require("./CategoryFilter"));
const CheckBox_1 = __importDefault(require("./CheckBox"));
const constants_1 = require("../constants");
const Filters = (props) => {
    return ((0, jsx_runtime_1.jsx)("aside", { className: 'col col-md-3', children: (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)(CategoryFilter_1.default, { categories: constants_1.CATEGORIES, handler: props.categoryHandler }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { name: 'brands', options: constants_1.BRANDS, handler: props.checkboxHandler }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { name: 'colors', options: constants_1.COLORS, handler: props.checkboxHandler }), (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'btn', onClick: props.updateDisplay, children: "Filter" })] }) }));
};
exports.default = Filters;
//# sourceMappingURL=Filters.js.map