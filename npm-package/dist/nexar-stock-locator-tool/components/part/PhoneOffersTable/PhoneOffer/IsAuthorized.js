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
var EmptyStar_1 = __importDefault(require("../../../icons/EmptyStar"));
var Star_1 = __importDefault(require("../../../icons/Star"));
var IsAuthorized = function (_a) {
    var seller = _a.seller;
    return (react_1.default.createElement(StarIcon, null,
        seller.isAuthorized && !seller.isBroker && react_1.default.createElement(Star_1.default, null),
        !seller.isAuthorized && !seller.isBroker && react_1.default.createElement(EmptyStar_1.default, null)));
};
var StarIcon = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-content: center;\n  height: 100%;\n  svg {\n    display: block;\n    height: 20px;\n    margin: auto;\n    width: 9px;\n  }\n"], ["\n  display: flex;\n  align-content: center;\n  height: 100%;\n  svg {\n    display: block;\n    height: 20px;\n    margin: auto;\n    width: 9px;\n  }\n"])));
exports.default = IsAuthorized;
var templateObject_1;
