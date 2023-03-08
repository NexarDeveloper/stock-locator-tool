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
var Exchange_1 = __importDefault(require("../../../icons/Exchange"));
var useHover_1 = __importDefault(require("../../../../hooks/useHover"));
var Currency = function (_a) {
    var country = _a.country, offer = _a.offer, theme = _a.theme;
    var _b = (0, useHover_1.default)(), isHovered = _b[0], handleMouseOut = _b[1], handleMouseOver = _b[2];
    var pricePoints = (0, lib_1.getPricePoints)(offer.prices);
    if (pricePoints.length === 0) {
        return (react_1.default.createElement("td", null,
            react_1.default.createElement("span", null)));
    }
    var pricePoint = pricePoints[0];
    var wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
    return (react_1.default.createElement(StyledCurrency, null,
        wasConverted && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ExchangeIconContainer, { onMouseOut: handleMouseOut, onMouseOver: handleMouseOver, style: { color: theme.keyText } },
                react_1.default.createElement(Exchange_1.default, null)),
            isHovered && (react_1.default.createElement(Tooltip, { onMouseOut: handleMouseOut, onMouseOver: handleMouseOver, style: { backgroundColor: "white", color: "black" } },
                react_1.default.createElement(TooltipContent, null,
                    react_1.default.createElement(TooltipText, null,
                        react_1.default.createElement("div", null, "Prices were converted to ".concat(pricePoint.convertedCurrency, " from ").concat(pricePoint.currency, ".\n")),
                        react_1.default.createElement("div", null, "Rate: 1 ".concat(pricePoint.currency, " = ").concat((0, lib_1.getFormattedNumber)(pricePoint.conversionRate, country, 2), " ").concat(pricePoint.convertedCurrency)))))))),
        !wasConverted && react_1.default.createElement("span", null)));
};
var StyledCurrency = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  text-align: center;\n  position: relative;\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  text-align: center;\n  position: relative;\n"])));
var ExchangeIconContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  svg {\n    height: 17px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  svg {\n    height: 17px;\n  }\n"])));
var Tooltip = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 4px;\n  display: block;\n  position: absolute;\n  right: -20px;\n  top: 30px;\n  width: 120px;\n  &:before {\n    background-color: inherit;\n    border: inherit;\n    box-shadow: inherit;\n    content: \"\";\n    display: block;\n    height: 12px;\n    position: absolute;\n    right: 50%;\n    top: -6px;\n    transform: rotate(-45deg);\n    width: 12px;\n    z-index: 1;\n  }\n"], ["\n  border-radius: 4px;\n  display: block;\n  position: absolute;\n  right: -20px;\n  top: 30px;\n  width: 120px;\n  &:before {\n    background-color: inherit;\n    border: inherit;\n    box-shadow: inherit;\n    content: \"\";\n    display: block;\n    height: 12px;\n    position: absolute;\n    right: 50%;\n    top: -6px;\n    transform: rotate(-45deg);\n    width: 12px;\n    z-index: 1;\n  }\n"])));
var TooltipContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: inherit;\n  border-radius: inherit;\n  padding: 5px 4px 5px 4px;\n  position: relative;\n  z-index: 2;\n"], ["\n  background: inherit;\n  border-radius: inherit;\n  padding: 5px 4px 5px 4px;\n  position: relative;\n  z-index: 2;\n"])));
var TooltipText = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 10px;\n  line-height: 12px;\n"], ["\n  font-size: 10px;\n  line-height: 12px;\n"])));
exports.default = Currency;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
