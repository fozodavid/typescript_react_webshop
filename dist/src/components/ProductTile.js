"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ProductTile.css");
function ProductTile(props) {
    return ((0, jsx_runtime_1.jsxs)("article", { className: "product col col-md-3", children: [(0, jsx_runtime_1.jsx)("img", { src: props.picture, alt: "product" }), (0, jsx_runtime_1.jsxs)("p", { children: [props.name, (0, jsx_runtime_1.jsx)("span", { style: { color: props.color }, children: "\u23FA" })] }), (0, jsx_runtime_1.jsx)("p", { className: "price", children: props.price })] }));
}
exports.default = ProductTile;
//# sourceMappingURL=ProductTile.js.map