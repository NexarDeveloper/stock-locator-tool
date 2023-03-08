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
var AngleDown_1 = __importDefault(require("../icons/AngleDown"));
var AngleUp_1 = __importDefault(require("../icons/AngleUp"));
var lib_1 = require("../../lib");
var ShowButton = function (_a) {
    var result = _a.result, isShowingAll = _a.isShowingAll, handleShowAllClick = _a.handleShowAllClick, handleShowFewerClick = _a.handleShowFewerClick, theme = _a.theme;
    return (react_1.default.createElement(react_1.default.Fragment, null, result.part.sellers.length > 5 && (react_1.default.createElement(react_1.default.Fragment, null,
        !isShowingAll && (react_1.default.createElement(StyledShowButton, { onClick: handleShowAllClick, type: "button", style: theme.background !== "#FFFFFF"
                ? {
                    border: "1px solid ".concat(theme.button),
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                }
                : {
                    border: "1px solid ".concat(theme.button),
                    backgroundColor: theme.buttonSecondary,
                    color: theme.button,
                } },
            react_1.default.createElement(StyledIcon, null,
                react_1.default.createElement(AngleDown_1.default, null)),
            react_1.default.createElement(ButtonText, null, "Show All"))),
        isShowingAll && (react_1.default.createElement(StyledShowButton, { onClick: handleShowFewerClick, type: "button", style: {
                border: "1px solid ".concat(theme.button),
                backgroundColor: theme.button,
                color: theme.buttonSecondary,
            } },
            react_1.default.createElement(StyledIcon, null,
                react_1.default.createElement(AngleUp_1.default, null)),
            react_1.default.createElement(ButtonText, null, "Show Fewer")))))));
};
var StyledShowButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 15px;\n  padding: 4px 8px;\n  margin: 8px 0px;\n  height: 25px;\n  width: 200px;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: ", ") {\n    height: 40px;\n    margin-left: unset;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 15px;\n  padding: 4px 8px;\n  margin: 8px 0px;\n  height: 25px;\n  width: 200px;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: ", ") {\n    height: 40px;\n    margin-left: unset;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), lib_1.deviceWidths.tablet);
var StyledIcon = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  svg {\n    width: 9px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  svg {\n    width: 9px;\n  }\n"])));
var ButtonText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 4px;\n  height: 100%;\n  align-items: center;\n  display: inline-flex;\n"], ["\n  margin-left: 4px;\n  height: 100%;\n  align-items: center;\n  display: inline-flex;\n"])));
exports.default = ShowButton;
var templateObject_1, templateObject_2, templateObject_3;
