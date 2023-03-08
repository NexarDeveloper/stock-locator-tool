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
var Mpn = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var query = _a.query, result = _a.result, theme = _a.theme;
    return (react_1.default.createElement(PartTitleContainer, { style: {
            color: (_c = (_b = theme.partHeaderMpn) !== null && _b !== void 0 ? _b : theme.partHeaderText) !== null && _c !== void 0 ? _c : theme.text,
            borderRight: "1px solid ".concat((_f = (_e = (_d = theme.highlight) !== null && _d !== void 0 ? _d : theme.partHeaderMpn) !== null && _e !== void 0 ? _e : theme.partHeaderText) !== null && _f !== void 0 ? _f : theme.text),
        } },
        react_1.default.createElement("div", null, result.part.manufacturer.name),
        react_1.default.createElement("div", { style: { color: (_g = theme.partHeaderMpn) !== null && _g !== void 0 ? _g : "inherit" } },
            react_1.default.createElement(react_highlight_words_1.default, { autoEscape: true, searchWords: [query], textToHighlight: result.part.mpn, highlightStyle: {
                    color: (_h = theme.highlight) !== null && _h !== void 0 ? _h : "inherit",
                    fontWeight: "bold",
                    backgroundColor: "inherit",
                } }))));
};
var PartTitleContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  font-size: 18px;\n  line-height: 25px;\n  padding-right: 20px;\n  margin-right: 20px;\n"], ["\n  display: inline-block;\n  font-size: 18px;\n  line-height: 25px;\n  padding-right: 20px;\n  margin-right: 20px;\n"])));
exports.default = Mpn;
var templateObject_1;
