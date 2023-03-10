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
var lib_1 = require("../lib");
var poweredByNexar_1 = __importDefault(require("./icons/poweredByNexar"));
var Footer = function (_a) {
    var theme = _a.theme;
    return (react_1.default.createElement(FooterContainer, null,
        react_1.default.createElement(NexarLogo, { style: { color: theme.text } },
            react_1.default.createElement(poweredByNexar_1.default, null)),
        react_1.default.createElement(FooterText, { style: { color: theme.text, borderLeft: "1px solid ".concat(theme.tint) } },
            react_1.default.createElement("span", null, "By using this tool, you agree to Octopart's "),
            react_1.default.createElement("a", { href: "https://octopart.com/terms", style: { color: theme.button } }, "Terms & Conditions"),
            react_1.default.createElement("span", null, " and "),
            react_1.default.createElement("a", { href: "https://octopart.com/privacy", style: { color: theme.button } }, "Privacy Policy"),
            react_1.default.createElement("span", null, "."))));
};
var FooterContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 11px;\n  line-height: 8px;\n  margin: 40px;\n  padding-top: 36px;\n\n  @media (max-width: ", ") {\n    margin: 20px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 11px;\n  line-height: 8px;\n  margin: 40px;\n  padding-top: 36px;\n\n  @media (max-width: ", ") {\n    margin: 20px;\n  }\n"])), lib_1.deviceWidths.phone);
var FooterText = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-left: 12px;\n  line-height: 16px;\n  text-align: left;\n\n  a {\n    text-decoration: none;\n  }\n"], ["\n  padding-left: 12px;\n  line-height: 16px;\n  text-align: left;\n\n  a {\n    text-decoration: none;\n  }\n"])));
var NexarLogo = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 12px;\n  border-radius: 4px;\n  position: relative;\n"], ["\n  display: inline-block;\n  padding: 12px;\n  border-radius: 4px;\n  position: relative;\n"])));
exports.default = Footer;
var templateObject_1, templateObject_2, templateObject_3;
