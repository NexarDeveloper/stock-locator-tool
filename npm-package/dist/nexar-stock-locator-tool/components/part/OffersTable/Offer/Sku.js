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
var Sku = function (_a) {
    var offer = _a.offer, theme = _a.theme;
    return (react_1.default.createElement("td", { align: "left", style: { padding: "4px 6px" } },
        react_1.default.createElement(StyledSku, { href: offer.clickUrl, rel: "nofollow", target: "_blank", style: { color: theme.text } }, offer.sku)));
};
var StyledSku = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
exports.default = Sku;
var templateObject_1;
