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
    return (react_1.default.createElement(StyledMoq, { style: { color: theme.text } },
        react_1.default.createElement(MoqLabel, null, "MOQ"),
        react_1.default.createElement(MoqValue, null, offer.moq !== undefined &&
            ((0, lib_1.getFormattedNumber)(offer.moq, country) || "-"))));
};
var StyledMoq = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  display: flex;\n  justify-content: space-around;\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  display: flex;\n  justify-content: space-around;\n"])));
var MoqLabel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 8px;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 8px;\n"])));
var MoqValue = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-right: 20px;\n"], ["\n  padding-right: 20px;\n"])));
exports.default = Moq;
var templateObject_1, templateObject_2, templateObject_3;
