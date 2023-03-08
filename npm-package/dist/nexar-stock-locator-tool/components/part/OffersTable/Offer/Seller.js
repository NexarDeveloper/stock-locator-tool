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
var lib_2 = require("../../../../lib");
var Seller = function (_a) {
    var country = _a.country, offer = _a.offer, seller = _a.seller, offerIndex = _a.offerIndex, handleExpandClick = _a.handleExpandClick, theme = _a.theme;
    return (react_1.default.createElement(StyledSeller, null,
        react_1.default.createElement(SellerContent, null,
            react_1.default.createElement(StyledSellerUrl, { href: offer.clickUrl, rel: "nofollow", target: "_blank", style: { color: theme.text } }, seller.company.name),
            offerIndex === 0 && seller.offers.length > 1 && (react_1.default.createElement(StyledExpander, { onClick: handleExpandClick, style: {
                    border: "1px solid ".concat(theme.tint),
                    color: theme.tableHeaderText,
                } }, (0, lib_2.getFormattedNumber)(seller.offers.length, country))))));
};
var StyledSeller = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 13px;\n  justify-content: space-between;\n  display: table-cell;\n  padding: 6px;\n  @media (max-width: ", ") {\n    padding: 0px;\n  }\n  div {\n    position: relative;\n  }\n"], ["\n  font-size: 13px;\n  justify-content: space-between;\n  display: table-cell;\n  padding: 6px;\n  @media (max-width: ", ") {\n    padding: 0px;\n  }\n  div {\n    position: relative;\n  }\n"])), lib_1.deviceWidths.phone);
var SellerContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n"])));
var StyledSellerUrl = styled_components_1.default.a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-decoration: none;\n  height: 100%;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  text-decoration: none;\n  height: 100%;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var StyledExpander = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 15px;\n  height: 15px;\n  line-height: 12px;\n  font-size: 7px;\n  margin-right: 10px;\n  border-radius: 40px;\n  text-align: center;\n  cursor: pointer;\n\n  @media (max-width: ", ") {\n    font-size: 10px;\n    line-height: 13px;\n    padding-left: 4px;\n  }\n\n  &:before,\n  &:after,\n  & {\n    box-sizing: border-box;\n  }\n"], ["\n  width: 15px;\n  height: 15px;\n  line-height: 12px;\n  font-size: 7px;\n  margin-right: 10px;\n  border-radius: 40px;\n  text-align: center;\n  cursor: pointer;\n\n  @media (max-width: ", ") {\n    font-size: 10px;\n    line-height: 13px;\n    padding-left: 4px;\n  }\n\n  &:before,\n  &:after,\n  & {\n    box-sizing: border-box;\n  }\n"])), lib_1.deviceWidths.tablet);
exports.default = Seller;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
