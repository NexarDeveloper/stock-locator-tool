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
var RoundNexarLogo_1 = require("./icons/RoundNexarLogo");
var styled_components_1 = __importDefault(require("styled-components"));
var SearchResultsPlaceholder = function (_a) {
    var theme = _a.theme;
    var table = new Array(7).fill(0);
    return (react_1.default.createElement(PlaceholderContainer, null,
        react_1.default.createElement(PlaceholderTable, { style: { border: "1px solid ".concat(theme.tint) } },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null)),
            react_1.default.createElement("tbody", null, table.map(function (_, index) {
                return (react_1.default.createElement("tr", { key: index, style: {
                        backgroundColor: index % 2 === 0 ? theme.row1 : theme.row2,
                    } },
                    react_1.default.createElement("td", null)));
            }))),
        react_1.default.createElement(IconContainer, null,
            react_1.default.createElement(RoundNexarLogo_1.RoundNexarLogo, null))));
};
var PlaceholderContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  margin: 0 15px;\n"], ["\n  position: relative;\n  margin: 0 15px;\n"])));
var IconContainer = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: calc(50% - 25.18px);\n  top: calc(50% - 25.47px);\n\n  svg {\n    width: 50.36px;\n    height: 50.94px;\n  }\n"], ["\n  position: absolute;\n  left: calc(50% - 25.18px);\n  top: calc(50% - 25.47px);\n\n  svg {\n    width: 50.36px;\n    height: 50.94px;\n  }\n"])));
var PlaceholderTable = styled_components_1.default.table(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 250px;\n  border-spacing: 0;\n\n  thead > th {\n    height: 50px;\n  }\n\n  tbody > tr {\n    height: 32px;\n  }\n"], ["\n  width: 100%;\n  height: 250px;\n  border-spacing: 0;\n\n  thead > th {\n    height: 50px;\n  }\n\n  tbody > tr {\n    height: 32px;\n  }\n"])));
exports.default = SearchResultsPlaceholder;
var templateObject_1, templateObject_2, templateObject_3;
