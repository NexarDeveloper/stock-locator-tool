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
var Sku = function (_a) {
    var isExpanded = _a.isExpanded, offer = _a.offer, theme = _a.theme;
    return (react_1.default.createElement(StyledSku, { style: { color: theme.text } },
        react_1.default.createElement(SkuLabel, null, "SKU"),
        react_1.default.createElement(SkuValue, { style: isExpanded ? { overflow: "visible" } : { textOverflow: "ellipsis" } }, offer.sku)));
};
var StyledSku = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n\n  span {\n    text-decoration: none;\n    max-width: 283px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n    @media (max-width: ", ") {\n      max-width: 50px;\n    }\n  }\n"], ["\n  font-size: 13px;\n  padding: 6px;\n\n  span {\n    text-decoration: none;\n    max-width: 283px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n    @media (max-width: ", ") {\n      max-width: 50px;\n    }\n  }\n"])), lib_1.deviceWidths.phone);
var SkuLabel = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 4px;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  margin-right: 4px;\n"])));
var SkuValue = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 17px;\n  margin-left: 4px;\n"], ["\n  font-size: 14px;\n  line-height: 17px;\n  margin-left: 4px;\n"])));
exports.default = Sku;
var templateObject_1, templateObject_2, templateObject_3;
