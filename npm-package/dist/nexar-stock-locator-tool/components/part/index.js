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
var react_1 = __importDefault(require("react"));
var useExpansions_1 = __importStar(require("../../hooks/useExpansions"));
var useMediaQuery_1 = __importDefault(require("../../hooks/useMediaQuery"));
var Header_1 = __importDefault(require("./Header"));
var Index_1 = __importDefault(require("./OffersTable/Index"));
var PhoneOffersTable_1 = __importDefault(require("./PhoneOffersTable"));
var ShowButton_1 = __importDefault(require("./ShowButton"));
var styled_components_1 = __importDefault(require("styled-components"));
var lib_1 = require("../../lib");
var maxSellersInCompactView = 5;
var Part = function (_a) {
    var country = _a.country, currency = _a.currency, query = _a.query, result = _a.result, searchParameters = _a.searchParameters, theme = _a.theme, hideColumns = _a.hideColumns;
    var _b = (0, useExpansions_1.default)(result.part.sellers, searchParameters.expandOfferTable), expansions = _b.expansions, handleExpanderClick = _b.handleExpanderClick, handleShowAllClick = _b.handleShowAllClick, handleShowFewerClick = _b.handleShowFewerClick, isShowingAll = _b.isShowingAll;
    var _c = (0, useMediaQuery_1.default)(), isMobile = _c.isMobile, isTablet = _c.isTablet;
    var isDesktop = !isTablet && !isMobile;
    var slicedSellers = result.part.sellers;
    if (!isShowingAll) {
        slicedSellers = result.part.sellers.slice(0, maxSellersInCompactView);
    }
    return (react_1.default.createElement(useExpansions_1.Context.Provider, { value: { expansions: expansions, handleExpanderClick: handleExpanderClick } },
        react_1.default.createElement(StyledPart, { style: {
                border: "1px solid ".concat(theme.tint),
            } },
            react_1.default.createElement(Header_1.default, { query: query, result: result, searchParameters: searchParameters, theme: theme }),
            slicedSellers.length > 0 && isDesktop && (react_1.default.createElement(Index_1.default, { country: country, currency: currency, result: result, sellers: slicedSellers, theme: theme, hideColumns: hideColumns })),
            slicedSellers.length > 0 && !isDesktop && (react_1.default.createElement(PhoneOffersTable_1.default, { country: country, currency: currency, result: result, sellers: slicedSellers, theme: theme })),
            slicedSellers.length <= 0 && (react_1.default.createElement(NotFound, { style: { color: theme.text } }, "No distributors found")),
            react_1.default.createElement(ShowButton_1.default, { handleShowAllClick: handleShowAllClick, isShowingAll: isShowingAll, handleShowFewerClick: handleShowFewerClick, result: result, theme: theme }))));
};
var StyledPart = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 30px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: ", ") {\n    border: unset;\n  }\n"], ["\n  margin-bottom: 30px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: ", ") {\n    border: unset;\n  }\n"])), lib_1.deviceWidths.tablet);
var NotFound = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 6px 40px;\n"], ["\n  padding: 6px 40px;\n"])));
exports.default = Part;
var templateObject_1, templateObject_2;
