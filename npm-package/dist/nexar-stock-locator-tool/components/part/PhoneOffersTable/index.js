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
var PhoneOffer_1 = __importDefault(require("./PhoneOffer"));
var PhoneOffersTable = function (_a) {
    var country = _a.country, currency = _a.currency, result = _a.result, sellers = _a.sellers, theme = _a.theme;
    return (react_1.default.createElement(OffersTable, { style: {
            borderWidth: "1px 0px",
            borderStyle: "solid",
            borderColor: theme.tint,
        } }, sellers.map(function (seller) { return (react_1.default.createElement(PhoneOffer_1.default, { country: country, currency: currency, result: result, seller: seller, key: seller.company.id, theme: theme })); })));
};
var OffersTable = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  table {\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n  }\n"], ["\n  table {\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n  }\n"])));
exports.default = PhoneOffersTable;
var templateObject_1;
