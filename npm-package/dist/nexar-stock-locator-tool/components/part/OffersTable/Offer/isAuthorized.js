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
var Star_1 = __importDefault(require("../../../icons/Star"));
var EmptyStar_1 = __importDefault(require("../../../icons/EmptyStar"));
var IsAuthorized = function (_a) {
    var seller = _a.seller;
    var title = seller.isAuthorized && !seller.isBroker
        ? "Authorized Distributor"
        : "Non-Authorized Stocking Distributor";
    return (react_1.default.createElement(StarContainer, null,
        react_1.default.createElement("a", { href: "https://octopart.com/authorized", tabIndex: -1, title: title },
            react_1.default.createElement(StarIcon, null,
                seller.isAuthorized && !seller.isBroker && react_1.default.createElement(Star_1.default, null),
                !seller.isAuthorized && !seller.isBroker && react_1.default.createElement(EmptyStar_1.default, null)))));
};
var StarContainer = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StarIcon = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  svg {\n    display: block;\n    height: 20px;\n    margin: auto;\n    width: 9px;\n  }\n"], ["\n  svg {\n    display: block;\n    height: 20px;\n    margin: auto;\n    width: 9px;\n  }\n"])));
exports.default = IsAuthorized;
var templateObject_1, templateObject_2;
