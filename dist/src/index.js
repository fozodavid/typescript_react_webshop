"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const registerServiceWorker_1 = __importDefault(require("./registerServiceWorker"));
react_dom_1.default.render((0, jsx_runtime_1.jsx)(App_1.default, {}), document.getElementById('root'));
(0, registerServiceWorker_1.default)();
//# sourceMappingURL=index.js.map