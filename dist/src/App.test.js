"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(require("react-dom"));
it('renders without crashing', () => {
    const div = document.createElement('div');
    react_dom_1.default.render(/>, div);, react_dom_1.default.unmountComponentAtNode(div));
});
//# sourceMappingURL=App.test.js.map