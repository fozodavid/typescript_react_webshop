"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ProductsView_1 = __importDefault(require("./ProductsView"));
const Filters_1 = __importDefault(require("./Filters"));
const constants_1 = require("../constants");
const WebShop = ({ data }) => {
    const [state, setState] = react_1.default.useState({
        filters: {
            category: constants_1.CATEGORIES[0],
            brands: [],
            colors: [],
        },
        onDisplay: {
            category: constants_1.CATEGORIES[0],
            brands: [],
            colors: [],
        }
    });
    const updateDisplay = () => {
        setState(prev => ({
            ...prev,
            onDisplay: {
                ...state.filters
            }
        }));
    };
    const categoryHandler = (e) => {
        setState(prev => ({
            ...prev,
            filters: {
                ...prev.filters,
                category: e.target.value
            }
        }));
    };
    const addToFilters = (group, id) => {
        setState(prev => ({
            ...prev,
            filters: {
                ...prev.filters,
                [group]: [
                    ...prev.filters[group],
                    id
                ]
            }
        }));
    };
    const removeFromFilters = (group, id) => {
        setState(prev => ({
            ...prev,
            filters: {
                ...prev.filters,
                [group]: [
                    ...prev.filters[group].filter(item => item !== id)
                ]
            }
        }));
    };
    const checkboxHandler = (e) => {
        if (e.target.checked) {
            return addToFilters(e.target.name, e.target.id);
        }
        removeFromFilters(e.target.name, e.target.id);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'row', children: [(0, jsx_runtime_1.jsx)(Filters_1.default, { checkboxHandler: checkboxHandler, categoryHandler: categoryHandler, updateDisplay: updateDisplay }), (0, jsx_runtime_1.jsx)(ProductsView_1.default, { data: data, onDisplay: state.onDisplay })] }));
};
exports.default = WebShop;
//# sourceMappingURL=WebShop.js.map