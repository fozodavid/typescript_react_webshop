"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ProductTile_1 = __importDefault(require("./ProductTile"));
const utils_1 = __importDefault(require("../utils"));
require("./ProductsView.css");
function ProductsView(props) {
    const itemsOnDisplay = (0, utils_1.default)(props.data, props.onDisplay);
    if (itemsOnDisplay.length > 0) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "col col-md-9 products", children: itemsOnDisplay.map(item => (0, jsx_runtime_1.jsx)(ProductTile_1.default, { ...item }, item.guid)) }));
    }
    return (0, jsx_runtime_1.jsx)("p", { className: "error", children: "Sorry, no products matched your selection." });
}
exports.default = ProductsView;
//# sourceMappingURL=ProductsView.js.map