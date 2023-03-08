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
var Seller = function (_a) {
    var country = _a.country, offer = _a.offer, seller = _a.seller, theme = _a.theme;
    return (react_1.default.createElement(StyledSeller, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(SellerUrl, { style: { color: theme.text } }, seller.company.name))));
};
var StyledSeller = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding: 6px;\n  margin-left: 4px;\n\n  @media (max-width: ", ") {\n    padding: 0px;\n  }\n  div {\n    position: relative;\n    flex-grow: 1;\n    justify-content: space-between;\n  }\n"], ["\n  font-size: 13px;\n  padding: 6px;\n  margin-left: 4px;\n\n  @media (max-width: ", ") {\n    padding: 0px;\n  }\n  div {\n    position: relative;\n    flex-grow: 1;\n    justify-content: space-between;\n  }\n"])), lib_1.deviceWidths.phone);
var SellerUrl = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-decoration: none;\n  display: inline-block;\n  padding-right: 18px;\n  max-width: 155px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 16px;\n  line-height: 19px;\n"], ["\n  text-decoration: none;\n  display: inline-block;\n  padding-right: 18px;\n  max-width: 155px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 16px;\n  line-height: 19px;\n"])));
exports.default = Seller;
var templateObject_1, templateObject_2;
