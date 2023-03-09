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
var lib_1 = require("../../../../lib");
var Stock = function (_a) {
    var country = _a.country, offer = _a.offer, seller = _a.seller, theme = _a.theme;
    return (react_1.default.createElement(StyledStock, { style: { color: theme.keyText } },
        react_1.default.createElement(StockLabel, null, "STOCK"),
        react_1.default.createElement(StockValue, null, (0, lib_1.getStock)(offer.inventoryLevel, seller && seller.isBroker, country))));
};
var StyledStock = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  display: flex;\n  justify-content: space-around;\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  display: flex;\n  justify-content: space-around;\n"])));
var StockLabel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 8px;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 8px;\n"])));
var StockValue = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-right: 20px;\n"], ["\n  padding-right: 20px;\n"])));
exports.default = Stock;
var templateObject_1, templateObject_2, templateObject_3;
