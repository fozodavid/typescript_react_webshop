"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const products_json_1 = __importDefault(require("./data/products.json"));
const WebShop_1 = __importDefault(require("./components/WebShop"));
require("./App.css");
const App = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsx)("h1", { children: "React Webshop App" }) }), (0, jsx_runtime_1.jsx)(WebShop_1.default, { data: products_json_1.default })] }));
};
exports.default = App;
//# sourceMappingURL=App.js.map