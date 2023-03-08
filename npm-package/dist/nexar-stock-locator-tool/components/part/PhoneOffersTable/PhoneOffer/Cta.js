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
var lib_1 = require("../../../../lib");
var types_1 = require("../../../../types");
var Cta = function (_a) {
    var offer = _a.offer, seller = _a.seller, result = _a.result, isExpanded = _a.isExpanded, theme = _a.theme;
    return (react_1.default.createElement(StyledCta, { style: isExpanded ? { justifyContent: "center" } : { justifyContent: "right" } },
        react_1.default.createElement("div", { style: { backgroundColor: theme.button } },
            !seller.isBroker &&
                !seller.isRfq &&
                (offer.inventoryLevel > 0 ||
                    offer.inventoryLevel ===
                        types_1.InventoryLevel.in_stock_but_not_reported) && (react_1.default.createElement("a", { href: offer.clickUrl, rel: "noreferrer", target: "_blank", style: { color: theme.buttonSecondary } }, "Visit site")),
            seller.isRfq && (react_1.default.createElement("a", { href: "/rfq/generate?".concat((0, lib_1.getUrlSearchParams)({
                    ppid: result.part.id,
                    vpid: offer.id,
                })), rel: "noreferrer", target: "_blank", style: { color: theme.buttonSecondary } }, "Send RFQ")))));
};
var StyledCta = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1 1 50%;\n  align-items: stretch;\n  margin: 5px 5px 5px 5px;\n  max-width: 60px;\n\n  div {\n    display: flex;\n    border-radius: 4px;\n\n    a {\n      display: flex;\n      align-items: center;\n      text-align: center;\n      padding: 4px 16px;\n      text-decoration: none;\n    }\n  }\n"], ["\n  display: flex;\n  flex: 1 1 50%;\n  align-items: stretch;\n  margin: 5px 5px 5px 5px;\n  max-width: 60px;\n\n  div {\n    display: flex;\n    border-radius: 4px;\n\n    a {\n      display: flex;\n      align-items: center;\n      text-align: center;\n      padding: 4px 16px;\n      text-decoration: none;\n    }\n  }\n"])));
exports.default = Cta;
var templateObject_1;
