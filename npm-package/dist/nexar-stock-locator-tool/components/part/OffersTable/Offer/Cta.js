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
var types_1 = require("../../../../types");
var styled_components_1 = __importDefault(require("styled-components"));
var lib_1 = require("../../../../lib");
var Cta = function (_a) {
    var offer = _a.offer, seller = _a.seller, result = _a.result, theme = _a.theme;
    return (react_1.default.createElement(StyledCta, null,
        react_1.default.createElement("div", null,
            !seller.isBroker &&
                !seller.isRfq &&
                (offer.inventoryLevel > 0 ||
                    offer.inventoryLevel ===
                        types_1.InventoryLevel.in_stock_but_not_reported) && (react_1.default.createElement("a", { href: offer.clickUrl, rel: "noreferrer", target: "_blank", style: {
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                } }, "Visit site")),
            seller.isRfq && (react_1.default.createElement("a", { href: "/rfq/generate?".concat((0, lib_1.getUrlSearchParams)({
                    ppid: result.part.id,
                    vpid: offer.id,
                })), rel: "noreferrer", target: "_blank", style: {
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                } }, "Send RFQ")),
            seller.isBroker && !seller.isRfq && react_1.default.createElement("span", null, ".."),
            !seller.isBroker &&
                !seller.isRfq &&
                offer.inventoryLevel <= 0 &&
                offer.inventoryLevel !== types_1.InventoryLevel.in_stock_but_not_reported && (react_1.default.createElement("span", null, "..")))));
};
var StyledCta = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n\n  a {\n    text-decoration: none;\n    font-size: 12px;\n    border-radius: 4px;\n    padding: 4px 8px;\n    display: inline-block;\n    line-height: 15px;\n    white-space: nowrap;\n  }\n"], ["\n  text-align: center;\n\n  a {\n    text-decoration: none;\n    font-size: 12px;\n    border-radius: 4px;\n    padding: 4px 8px;\n    display: inline-block;\n    line-height: 15px;\n    white-space: nowrap;\n  }\n"])));
exports.default = Cta;
var templateObject_1;
