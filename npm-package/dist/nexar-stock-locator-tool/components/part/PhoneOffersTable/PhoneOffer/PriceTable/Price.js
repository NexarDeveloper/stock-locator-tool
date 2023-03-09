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
var styled_components_1 = __importDefault(require("styled-components"));
var lib_1 = require("../../../../../lib");
var Price = function (_a) {
    var country = _a.country, isTable = _a.isTable, offer = _a.offer, qty = _a.qty;
    var price = (0, lib_1.getPriceAtQty)(offer, qty, country, 2);
    if (!price) {
        return null;
    }
    return (react_1.default.createElement(PriceContainer, null,
        isTable && react_1.default.createElement(PriceLabel, null, qty),
        react_1.default.createElement(PriceValue, null, price)));
};
var PriceContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 2px;\n"], ["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 2px;\n"])));
var PriceLabel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100px;\n  padding-left: 10px;\n"], ["\n  width: 100px;\n  padding-left: 10px;\n"])));
var PriceValue = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-right: 20px;\n  text-align: right;\n"], ["\n  padding-right: 20px;\n  text-align: right;\n"])));
exports.default = Price;
var templateObject_1, templateObject_2, templateObject_3;
