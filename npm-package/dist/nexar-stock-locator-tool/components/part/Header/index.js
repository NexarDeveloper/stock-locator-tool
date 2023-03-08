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
var react_highlight_words_1 = __importDefault(require("react-highlight-words"));
var lib_1 = require("../../../lib");
var Mpn_1 = __importDefault(require("./Mpn"));
var Header = function (_a) {
    var _b, _c;
    var query = _a.query, result = _a.result, searchParameters = _a.searchParameters, theme = _a.theme;
    return (react_1.default.createElement(PartHeader, { style: { backgroundColor: (_b = theme.partHeaderBackground) !== null && _b !== void 0 ? _b : "inherit" } },
        searchParameters.enableManufacturerLink &&
            result.part.manufacturerUrl && (react_1.default.createElement("a", { href: result.part.manufacturerUrl, rel: "noreferrer", target: "_blank" },
            react_1.default.createElement(Mpn_1.default, { query: query, result: result, theme: theme }))),
        searchParameters.enableManufacturerLink &&
            !result.part.manufacturerUrl && (react_1.default.createElement(Mpn_1.default, { query: query, result: result, theme: theme })),
        !searchParameters.enableManufacturerLink && (react_1.default.createElement("a", { href: "https://octopart.com".concat(result.part.slug), rel: "noreferrer", target: "_blank" },
            react_1.default.createElement(Mpn_1.default, { query: query, result: result, theme: theme }))),
        result.akaMpn && (react_1.default.createElement(PartAka, null,
            react_1.default.createElement("span", null, "Also known as "),
            react_1.default.createElement(react_highlight_words_1.default, { autoEscape: true, searchWords: [query], textToHighlight: result.akaMpn }))),
        result.description && (react_1.default.createElement(PartDescription, { style: { color: (_c = theme.partHeaderText) !== null && _c !== void 0 ? _c : theme.text } }, result.part.descriptions[0].text))));
};
var PartHeader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 10px 10px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 10px 10px 0px 0px;\n\n  @media (max-width: ", ") {\n    border-radius: 5px;\n    padding-left: 16px;\n\n    a {\n      display: inline-block;\n    }\n  }\n"], ["\n  padding: 10px 10px 10px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 10px 10px 0px 0px;\n\n  @media (max-width: ", ") {\n    border-radius: 5px;\n    padding-left: 16px;\n\n    a {\n      display: inline-block;\n    }\n  }\n"])), lib_1.deviceWidths.tablet);
var PartAka = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 17px;\n  font-style: italic;\n"], ["\n  font-size: 12px;\n  line-height: 17px;\n  font-style: italic;\n"])));
var PartDescription = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 17px;\n  font-style: normal;\n"], ["\n  font-size: 12px;\n  line-height: 17px;\n  font-style: normal;\n"])));
exports.default = Header;
var templateObject_1, templateObject_2, templateObject_3;
