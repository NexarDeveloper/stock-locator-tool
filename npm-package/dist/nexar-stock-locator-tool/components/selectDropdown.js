"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectDropdown = void 0;
var react_1 = __importDefault(require("react"));
var useClickOutsideOrEscape_1 = __importDefault(require("../hooks/useClickOutsideOrEscape"));
var styled_components_1 = __importDefault(require("styled-components"));
var lib_1 = require("../lib");
var triangleUp_1 = __importDefault(require("./icons/triangleUp"));
var triangleDown_1 = __importDefault(require("./icons/triangleDown"));
var SelectDropdown = function (_a) {
    var _b;
    var name = _a.name, onClick = _a.onClick, options = _a.options, value = _a.value, theme = _a.theme;
    var _c = (0, useClickOutsideOrEscape_1.default)(), handleClick = _c.handleClick, isOpen = _c.isOpen, ref = _c.ref;
    var handleOptionClick = function (value) {
        onClick(value);
        handleClick();
    };
    var displayText = name !== "country" ? value : (_b = options.find(function (o) { return o.value === value; })) === null || _b === void 0 ? void 0 : _b.text;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DropdownContainer, { ref: ref },
            name === "country" && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(CountryDropdownTitle, { onClick: handleClick, tabIndex: 0, type: "button", style: {
                        border: "1px solid ".concat(theme.tint),
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null, displayText),
                    isOpen ? react_1.default.createElement(triangleUp_1.default, null) : react_1.default.createElement(triangleDown_1.default, null)),
                react_1.default.createElement(CountryDropdownOptions, null, isOpen &&
                    options.map(function (option) { return (react_1.default.createElement("li", { key: option.value }, value === option.value ? (react_1.default.createElement(DropdownOption, null,
                        react_1.default.createElement(OptionText, null, option.text))) : (react_1.default.createElement(DropdownOption, { onClick: function () { return handleOptionClick(option.value); }, type: "button" },
                        react_1.default.createElement(OptionText, null, option.text))))); })))),
            name !== "country" && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(DropdownTitle, { onClick: handleClick, tabIndex: 0, type: "button", style: {
                        border: "1px solid ".concat(theme.tint),
                    } },
                    react_1.default.createElement("div", null, displayText),
                    isOpen ? react_1.default.createElement(triangleUp_1.default, null) : react_1.default.createElement(triangleDown_1.default, null)),
                react_1.default.createElement(DropdownOptions, null, isOpen &&
                    options.map(function (option) { return (react_1.default.createElement("li", { key: option.value }, value === option.value ? (react_1.default.createElement(DropdownOption, null,
                        react_1.default.createElement(OptionText, null,
                            option.value,
                            " - ",
                            option.text))) : (react_1.default.createElement(DropdownOption, { onClick: function () { return handleOptionClick(option.value); }, type: "button" },
                        react_1.default.createElement(OptionText, null,
                            option.value,
                            " - ",
                            option.text))))); })))))));
};
exports.SelectDropdown = SelectDropdown;
var DropdownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  @media (max-width: ", ") {\n    width: 100%;\n    margin-bottom: 4px;\n  }\n"], ["\n  position: relative;\n  @media (max-width: ", ") {\n    width: 100%;\n    margin-bottom: 4px;\n  }\n"])), lib_1.deviceWidths.phone);
var DropdownTitle = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 35px;\n  display: flex;\n  flex: 1 1 70px;\n  font-family: inherit;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  background-color: white;\n  color: black;\n\n  div {\n    margin-right: 24px;\n\n    @media (max-width: ", ") {\n      margin-right: 6px;\n    }\n  }\n  svg {\n    width: 6px;\n    margin-left: 6px;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  height: 35px;\n  display: flex;\n  flex: 1 1 70px;\n  font-family: inherit;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  background-color: white;\n  color: black;\n\n  div {\n    margin-right: 24px;\n\n    @media (max-width: ", ") {\n      margin-right: 6px;\n    }\n  }\n  svg {\n    width: 6px;\n    margin-left: 6px;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), lib_1.deviceWidths.phone);
var CountryDropdownTitle = (0, styled_components_1.default)(DropdownTitle)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-basis: 280px;\n  min-width: 200px;\n\n  @media (max-width: ", ") {\n    min-width: unset;\n  }\n\n  div {\n    max-width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    @media (max-width: ", ") {\n      max-width: 180px;\n    }\n  }\n"], ["\n  flex-basis: 280px;\n  min-width: 200px;\n\n  @media (max-width: ", ") {\n    min-width: unset;\n  }\n\n  div {\n    max-width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    @media (max-width: ", ") {\n      max-width: 180px;\n    }\n  }\n"])), lib_1.deviceWidths.phone, lib_1.deviceWidths.phone);
var DropdownOptions = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  z-index: 13;\n  width: 200px;\n  position: absolute;\n  top: 20px;\n  left: 0px;\n  max-height: 400px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 0;\n  background-color: white;\n\n  li {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    width: 100%;\n  }\n"], ["\n  z-index: 13;\n  width: 200px;\n  position: absolute;\n  top: 20px;\n  left: 0px;\n  max-height: 400px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 0;\n  background-color: white;\n\n  li {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    width: 100%;\n  }\n"])));
var DropdownOption = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: none;\n  font-family: inherit;\n  width: 100%;\n  text-align: left;\n  margin: 2px 0px;\n  background-color: white;\n\n  @media (max-width: ", ") {\n    max-width: 190px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f4f2f1;\n  }\n"], ["\n  border: none;\n  font-family: inherit;\n  width: 100%;\n  text-align: left;\n  margin: 2px 0px;\n  background-color: white;\n\n  @media (max-width: ", ") {\n    max-width: 190px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f4f2f1;\n  }\n"])), lib_1.deviceWidths.phone);
var OptionText = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  overflow-wrap: normal;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 16px;\n"], ["\n  overflow-wrap: normal;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 16px;\n"])));
var CountryDropdownOptions = (0, styled_components_1.default)(DropdownOptions)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 310px;\n\n  @media (max-width: ", ") {\n    width: 200px;\n  }\n"], ["\n  width: 310px;\n\n  @media (max-width: ", ") {\n    width: 200px;\n  }\n"])), lib_1.deviceWidths.phone);
exports.default = exports.SelectDropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
