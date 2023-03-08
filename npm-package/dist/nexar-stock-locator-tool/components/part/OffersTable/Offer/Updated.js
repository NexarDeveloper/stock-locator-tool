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
var react_2 = require("react");
var lib_1 = require("../../../../lib");
var styled_components_1 = __importDefault(require("styled-components"));
var Updated = function (_a) {
    var offer = _a.offer, seller = _a.seller, theme = _a.theme;
    var _b = (0, react_2.useState)({ long: null, short: null }), timeAgo = _b[0], setTimeAgo = _b[1];
    if (!timeAgo.long && !timeAgo.short) {
        setTimeAgo((0, lib_1.getTimeAgo)(offer.updated));
    }
    (0, react_2.useEffect)(function () {
        var interval;
        if (!seller.company.isDistributorApi) {
            setTimeAgo((0, lib_1.getTimeAgo)(offer.updated));
        }
        else {
            setTimeAgo((0, lib_1.getTimeAgo)(offer.updated));
            interval = window.setInterval(function () {
                setTimeAgo((0, lib_1.getTimeAgo)(offer.updated));
            }, 3000);
        }
        return function () {
            window.clearInterval(interval);
        };
    }, [seller.company.isDistributorApi, offer.updated]);
    return (react_1.default.createElement(StyledUpdated, { title: "Data updated ".concat(timeAgo.long), style: { color: theme.text } }, timeAgo.short));
};
var StyledUpdated = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 6px 6px 6px 40px;\n  font-size: 13px;\n  display: table-cell;\n  vertical-align: middle;\n"], ["\n  padding: 6px 6px 6px 40px;\n  font-size: 13px;\n  display: table-cell;\n  vertical-align: middle;\n"])));
exports.default = Updated;
var templateObject_1;
