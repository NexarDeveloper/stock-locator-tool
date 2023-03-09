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
var Index_1 = __importDefault(require("./Offer/Index"));
var OffersTable = function (_a) {
    var currency = _a.currency, country = _a.country, result = _a.result, sellers = _a.sellers, theme = _a.theme, hideColumns = _a.hideColumns;
    return (react_1.default.createElement(StyledOffersTable, { style: {
            borderWidth: "1px 0px",
            borderStyle: "solid",
            borderColor: theme.tint,
        } },
        react_1.default.createElement("table", { style: { color: theme.text } },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.isAuthorized) && (react_1.default.createElement("th", { style: { width: "22px", color: theme.tableHeaderText } })),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.distributor) && (react_1.default.createElement("th", { style: { width: "18.1%", color: theme.tableHeaderText } }, "Distributor")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.sku) && (react_1.default.createElement("th", { style: {
                            textAlign: "left",
                            width: "11.4%",
                            color: theme.tableHeaderText,
                        } }, "SKU")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.stock) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "Stock")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.moq) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "MOQ")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.cta) && react_1.default.createElement("th", null),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.currency) && (react_1.default.createElement("th", { style: {
                            textAlign: "center",
                            color: theme.tableHeaderText,
                            width: "6.4%",
                        } }, currency)),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "1")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "10")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price100) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "100")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1000) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "1000")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10000) && (react_1.default.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "10000")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.updated) && (react_1.default.createElement("th", { style: {
                            textAlign: "right",
                            color: theme.tableHeaderText,
                        } }, "Updated")))),
            react_1.default.createElement("tbody", null, sellers.map(function (seller, sellerIndex) { return (react_1.default.createElement(Index_1.default, { country: country, key: seller.company.id, result: result, seller: seller, sellerIndex: sellerIndex, theme: theme, hideColumns: hideColumns })); })))));
};
var StyledOffersTable = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  table {\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n  }\n\n  th {\n    padding: 4px 6px;\n    text-align: left;\n    font-size: 13px;\n    text-transform: uppercase;\n  }\n"], ["\n  table {\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n  }\n\n  th {\n    padding: 4px 6px;\n    text-align: left;\n    font-size: 13px;\n    text-transform: uppercase;\n  }\n"])));
exports.default = OffersTable;
var templateObject_1;
