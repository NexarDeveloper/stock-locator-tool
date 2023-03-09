"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var lib_1 = require("../../../../lib");
var AngleDown_1 = __importDefault(require("../../../icons/AngleDown"));
var AngleUp_1 = __importDefault(require("../../../icons/AngleUp"));
var IsAuthorized_1 = __importDefault(require("./IsAuthorized"));
var Seller_1 = __importDefault(require("./Seller"));
var Sku_1 = __importDefault(require("./Sku"));
var Currency_1 = __importDefault(require("./Currency"));
var Cta_1 = __importDefault(require("./Cta"));
var Stock_1 = __importDefault(require("./Stock"));
var Moq_1 = __importDefault(require("./Moq"));
var Pkg_1 = __importDefault(require("./Pkg"));
var Index_1 = __importDefault(require("./PriceTable/Index"));
var PhoneOffer = function (_a) {
    var country = _a.country, currency = _a.currency, result = _a.result, seller = _a.seller, theme = _a.theme;
    var _b = (0, react_1.useState)(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var handleClick = function () {
        setIsExpanded(!isExpanded);
    };
    return (react_1.default.createElement(StyledPhoneOffer, { onClick: handleClick },
        react_1.default.createElement(OfferTitle, null,
            react_1.default.createElement(StyledAngle, { style: { color: theme.text } }, isExpanded ? react_1.default.createElement(AngleUp_1.default, null) : react_1.default.createElement(AngleDown_1.default, null)),
            react_1.default.createElement(TitleLeft, null,
                react_1.default.createElement(TitleTop, null,
                    react_1.default.createElement(IsAuthorized_1.default, { seller: seller }),
                    react_1.default.createElement(Seller_1.default, { country: country, offer: seller.offers[0], seller: seller, theme: theme })),
                react_1.default.createElement(TitleBottom, null,
                    react_1.default.createElement(Sku_1.default, { offer: seller.offers[0], isExpanded: isExpanded, theme: theme }),
                    !isExpanded && (react_1.default.createElement(Currency_1.default, { country: country, currency: currency, offer: seller.offers[0], theme: theme })))),
            !isExpanded && (react_1.default.createElement(Cta_1.default, { offer: seller.offers[0], seller: seller, result: result, isExpanded: isExpanded, theme: theme }))),
        isExpanded && (react_1.default.createElement(react_1.default.Fragment, null, seller.offers.map(function (offer, offerIndex) { return (react_1.default.createElement("div", { key: "".concat(seller.company.id, "-").concat(offer.id) },
            offerIndex > 0 && (react_1.default.createElement(Seperator, { style: { backgroundColor: theme.tint } })),
            react_1.default.createElement(DetailsContainer, null,
                offerIndex > 0 && (react_1.default.createElement(Sku_1.default, { offer: offer, isExpanded: isExpanded, theme: theme })),
                react_1.default.createElement(InfoTable, { style: { border: "1px solid ".concat(theme.tint) } },
                    react_1.default.createElement(Stock_1.default, { offer: offer, seller: seller, country: country, theme: theme }),
                    react_1.default.createElement(Moq_1.default, { country: country, offer: offer, theme: theme }),
                    react_1.default.createElement(Pkg_1.default, { offer: offer, theme: theme })),
                react_1.default.createElement(Index_1.default, { country: country, offer: offer, currency: currency, theme: theme }),
                react_1.default.createElement(Cta_1.default, { offer: offer, seller: seller, result: result, isExpanded: isExpanded, theme: theme })))); })))));
};
var StyledPhoneOffer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 17px;\n  padding: 0 16px 0 0;\n"], ["\n  font-size: 14px;\n  line-height: 17px;\n  padding: 0 16px 0 0;\n"])));
var StyledAngle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  svg {\n    display: block;\n    margin-right: 8px;\n    width: 9px;\n\n    @media (min-width: ", ") and (min-width: ", ") {\n      padding-top: 6px;\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  svg {\n    display: block;\n    margin-right: 8px;\n    width: 9px;\n\n    @media (min-width: ", ") and (min-width: ", ") {\n      padding-top: 6px;\n    }\n  }\n"])), lib_1.deviceWidths.phone, lib_1.deviceWidths.tablet);
var OfferTitle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 12px 15px;\n\n  @media (max-width: ", ") {\n    padding-right: 0px;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 12px 15px;\n\n  @media (max-width: ", ") {\n    padding-right: 0px;\n    width: 100%;\n  }\n"])), lib_1.deviceWidths.phone);
var TitleLeft = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 66%;\n\n  div {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 66%;\n\n  div {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n  }\n"])));
var TitleTop = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 16px;\n  line-height: 19px;\n  padding-bottom: 9px;\n"], ["\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 16px;\n  line-height: 19px;\n  padding-bottom: 9px;\n"])));
var TitleBottom = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  justify-content: space-between;\n  align-items: flex-end;\n"], ["\n  justify-content: space-between;\n  align-items: flex-end;\n"])));
var Seperator = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 1px;\n  width: 100%;\n  margin: 0 -16px;\n  padding: 0 16px;\n"], ["\n  height: 1px;\n  width: 100%;\n  margin: 0 -16px;\n  padding: 0 16px;\n"])));
var DetailsContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var InfoTable = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 6px 0 12px;\n  margin: 0 0 0 15px;\n  width: 300px;\n"], ["\n  padding: 6px 0 12px;\n  margin: 0 0 0 15px;\n  width: 300px;\n"])));
exports.default = PhoneOffer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
