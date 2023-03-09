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
var Exchange_1 = __importDefault(require("../../../../icons/Exchange"));
var lib_1 = require("../../../../../lib");
var Price_1 = __importDefault(require("./Price"));
var PriceTable = function (_a) {
    var country = _a.country, currency = _a.currency, offer = _a.offer, theme = _a.theme;
    var pricePoints = (0, lib_1.getPricePoints)(offer.prices);
    if (pricePoints.length === 0) {
        return (react_1.default.createElement(StyledCurrency, null,
            react_1.default.createElement("span", null)));
    }
    var pricePoint = pricePoints[0];
    var wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
    return (react_1.default.createElement(StyledPriceTable, { style: { color: theme.keyText } },
        react_1.default.createElement(TableHeader, null,
            react_1.default.createElement(PriceBreaks, null, "PRICE BREAKS"),
            react_1.default.createElement(StyledCurrency, null,
                react_1.default.createElement("span", null, currency),
                wasConverted && (react_1.default.createElement(IconContainer, null,
                    react_1.default.createElement(Exchange_1.default, null))))),
        react_1.default.createElement(Price_1.default, { isTable: true, country: country, offer: offer, qty: 1 }),
        react_1.default.createElement(Price_1.default, { isTable: true, country: country, offer: offer, qty: 10 }),
        react_1.default.createElement(Price_1.default, { isTable: true, country: country, offer: offer, qty: 100 }),
        react_1.default.createElement(Price_1.default, { isTable: true, country: country, offer: offer, qty: 1000 }),
        react_1.default.createElement(Price_1.default, { isTable: true, country: country, offer: offer, qty: 10000 })));
};
var StyledPriceTable = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 0 12px 15px;\n  font-size: 12px;\n  width: 300px;\n"], ["\n  margin: 0 0 12px 15px;\n  font-size: 12px;\n  width: 300px;\n"])));
var TableHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0px;\n"], ["\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0px;\n"])));
var PriceBreaks = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0;\n  align-items: center;\n"], ["\n  padding: 0;\n  align-items: center;\n"])));
var StyledCurrency = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-right: 20px;\n  align-items: center;\n  display: flex;\n"], ["\n  padding-right: 20px;\n  align-items: center;\n  display: flex;\n"])));
var IconContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 2px;\n  svg {\n    display: block;\n    height: 20px;\n    margin: auto;\n    width: 10px;\n  }\n"], ["\n  margin-left: 2px;\n  svg {\n    display: block;\n    height: 20px;\n    margin: auto;\n    width: 10px;\n  }\n"])));
exports.default = PriceTable;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
