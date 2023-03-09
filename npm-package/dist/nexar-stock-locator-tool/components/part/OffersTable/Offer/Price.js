"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lib_1 = require("../../../../lib");
var styled_components_1 = __importDefault(require("styled-components"));
var Price = function (_a) {
    var country = _a.country, offer = _a.offer, qty = _a.qty, theme = _a.theme;
    return (react_1.default.createElement(StyledPrice, { style: { color: theme.keyText } }, (0, lib_1.getPriceAtQty)(offer, qty, country)));
};
var StyledPrice = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
exports.default = Price;
var templateObject_1;
