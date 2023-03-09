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
var Moq = function (_a) {
    var country = _a.country, offer = _a.offer, theme = _a.theme;
    return (react_1.default.createElement(StyledMoq, { style: { color: theme.tableHeaderText } }, offer.moq !== undefined && (0, lib_1.getFormattedNumber)(offer.moq, country)));
};
var StyledMoq = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  text-align: right;\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  text-align: right;\n"])));
exports.default = Moq;
var templateObject_1;
