"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsText = exports.ResultsHeader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var part_1 = __importDefault(require("./part"));
var sponsored_1 = __importDefault(require("./sponsored"));
var lib_1 = require("../lib");
var SearchResults = function (_a) {
    var currency = _a.currency, country = _a.country, query = _a.query, data = _a.data, searchParameters = _a.searchParameters, theme = _a.theme, hideColumns = _a.hideColumns;
    if (!data || (data && !data.results)) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, data.results && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.ResultsHeader, null,
            react_1.default.createElement(exports.ResultsText, { style: { color: theme.text } },
                "Showing ",
                data.results.length,
                " ",
                data.results.length === 1 ? "result" : "results",
                " for ",
                query),
            react_1.default.createElement(sponsored_1.default, { theme: theme })),
        react_1.default.createElement("div", null, data.results.map(function (result) { return (react_1.default.createElement(part_1.default, { currency: currency, country: country, query: query, result: result, searchParameters: searchParameters, key: result.part.id, theme: theme, hideColumns: hideColumns })); }))))));
};
exports.ResultsHeader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"])), lib_1.deviceWidths.phone);
exports.ResultsText = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n\n  @media (max-width: ", ") {\n    margin-left: 0px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n\n  @media (max-width: ", ") {\n    margin-left: 0px;\n  }\n"])), lib_1.deviceWidths.phone);
exports.default = SearchResults;
var templateObject_1, templateObject_2;
