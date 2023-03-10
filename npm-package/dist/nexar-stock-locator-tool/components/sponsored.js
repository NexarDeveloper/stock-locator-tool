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
var info_1 = __importDefault(require("./icons/info"));
var useHover_1 = __importDefault(require("../hooks/useHover"));
var styled_components_1 = __importDefault(require("styled-components"));
var Sponsored = function (_a) {
    var theme = _a.theme;
    var _b = (0, useHover_1.default)(), isHovered = _b[0], handleMouseOut = _b[1], handleMouseOver = _b[2];
    return (react_1.default.createElement(SponsoredContainer, { style: { color: theme.text } },
        react_1.default.createElement("p", { "data-event": "click focus", onMouseOut: handleMouseOut, onMouseOver: handleMouseOver },
            react_1.default.createElement("span", null, "Sponsored"),
            react_1.default.createElement(info_1.default, null)),
        isHovered && (react_1.default.createElement(Tooltip, { "data-event": "click focus", onMouseOut: handleMouseOut, onMouseOver: handleMouseOver },
            react_1.default.createElement(TooltipContent, null,
                react_1.default.createElement(TooltipText, null,
                    "Octopart is compensated by the distributors listed here, and payment is one of several factors used to rank the order that distributors are listed in. As a free service, Octopart relies on sponsorship from advertisers including distributors and manufacturers. Visit our",
                    " ",
                    react_1.default.createElement("a", { href: "https://octopart.com/faq#how-does-octopart-make-money", target: "_blank", rel: "noreferrer", style: { color: theme.button } }, "FAQ"),
                    " ",
                    "to learn more."))))));
};
var SponsoredContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  span {\n    font-size: 13px;\n    line-height: 16px;\n  }\n\n  svg {\n    display: inline;\n    height: 11px;\n    margin-left: 4px;\n    width: 11px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  span {\n    font-size: 13px;\n    line-height: 16px;\n  }\n\n  svg {\n    display: inline;\n    height: 11px;\n    margin-left: 4px;\n    width: 11px;\n  }\n"])));
var Tooltip = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 225px;\n  z-index: 2;\n  border-radius: 4px;\n  display: block;\n  position: absolute;\n  right: 0px;\n  top: 40px;\n  background-color: white;\n  border: 1px solid black;\n\n  &:before {\n    right: 35px;\n    background-color: inherit;\n    border: inherit;\n    box-shadow: inherit;\n    content: \"\";\n    display: block;\n    height: 12px;\n    position: absolute;\n    transform: rotate(-45deg);\n    width: 12px;\n    z-index: 1;\n  }\n"], ["\n  width: 225px;\n  z-index: 2;\n  border-radius: 4px;\n  display: block;\n  position: absolute;\n  right: 0px;\n  top: 40px;\n  background-color: white;\n  border: 1px solid black;\n\n  &:before {\n    right: 35px;\n    background-color: inherit;\n    border: inherit;\n    box-shadow: inherit;\n    content: \"\";\n    display: block;\n    height: 12px;\n    position: absolute;\n    transform: rotate(-45deg);\n    width: 12px;\n    z-index: 1;\n  }\n"])));
var TooltipContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: inherit;\n  border-radius: inherit;\n  padding: 5px 4px 5px 4px;\n  position: relative;\n  z-index: 2;\n"], ["\n  background: inherit;\n  border-radius: inherit;\n  padding: 5px 4px 5px 4px;\n  position: relative;\n  z-index: 2;\n"])));
var TooltipText = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 15px;\n  color: black;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  color: black;\n"])));
exports.default = Sponsored;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
