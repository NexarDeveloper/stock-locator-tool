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
var Exchange_1 = __importDefault(require("../../../icons/Exchange"));
var useHover_1 = __importDefault(require("../../../../hooks/useHover"));
var lib_1 = require("../../../../lib");
var Currency = function (_a) {
    var country = _a.country, currency = _a.currency, offer = _a.offer, theme = _a.theme;
    var _b = (0, useHover_1.default)(), isHovered = _b[0], handleMouseOut = _b[1], handleMouseOver = _b[2];
    var pricePoints = (0, lib_1.getPricePoints)(offer.prices);
    if (pricePoints.length === 0) {
        return (react_1.default.createElement(StyledCurrency, null,
            react_1.default.createElement("span", null)));
    }
    var pricePoint = pricePoints[0];
    var wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
    return (react_1.default.createElement(StyledCurrency, null,
        react_1.default.createElement(CurrencyLabel, { style: { color: theme.text } }, currency),
        wasConverted && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(IconContainer, { onMouseOut: handleMouseOut, onMouseOver: handleMouseOver, style: { color: theme.text } },
                react_1.default.createElement(Exchange_1.default, null)),
            isHovered && (react_1.default.createElement(Tooltip, null,
                react_1.default.createElement(TooltipText, null,
                    react_1.default.createElement("div", null, "Prices were converted to ".concat(pricePoint.convertedCurrency, " from ").concat(pricePoint.currency, ".\n")),
                    react_1.default.createElement("div", null, "Rate: 1 ".concat(pricePoint.currency, " = ").concat((0, lib_1.getFormattedNumber)(pricePoint.conversionRate, country, 2), " ").concat(pricePoint.convertedCurrency))))))),
        !wasConverted && react_1.default.createElement("span", null),
        react_1.default.createElement(Price, { style: { color: theme.text } }, (0, lib_1.getFormattedNumber)(pricePoint.convertedPrice, country, 2))));
};
var StyledCurrency = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  text-align: center;\n  position: relative;\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  text-align: center;\n  position: relative;\n"])));
var CurrencyLabel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 4px;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 4px;\n"])));
var IconContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  svg {\n    height: 17px;\n  }\n"], ["\n  svg {\n    height: 17px;\n  }\n"])));
var Tooltip = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 120px;\n  top: 30px;\n  right: -10px;\n\n  &:before {\n    right: calc(50% - 7px);\n  }\n"], ["\n  width: 120px;\n  top: 30px;\n  right: -10px;\n\n  &:before {\n    right: calc(50% - 7px);\n  }\n"])));
var TooltipText = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 10px;\n  line-height: 12px;\n"], ["\n  font-size: 10px;\n  line-height: 12px;\n"])));
var Price = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  font-size: 12px;\n  line-height: 15px;\n  margin-left: 4px;\n"], ["\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  font-size: 12px;\n  line-height: 15px;\n  margin-left: 4px;\n"])), function (props) { return props.theme.text; });
exports.default = Currency;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
