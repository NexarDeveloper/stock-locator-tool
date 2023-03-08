"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var isAuthorized_1 = __importDefault(require("./isAuthorized"));
var Seller_1 = __importDefault(require("./Seller"));
var Sku_1 = __importDefault(require("./Sku"));
var Stock_1 = __importDefault(require("./Stock"));
var Moq_1 = __importDefault(require("./Moq"));
var Cta_1 = __importDefault(require("./Cta"));
var currency_1 = __importDefault(require("./currency"));
var Price_1 = __importDefault(require("./Price"));
var Updated_1 = __importDefault(require("./Updated"));
var Offer = function (_a) {
    var country = _a.country, result = _a.result, seller = _a.seller, sellerIndex = _a.sellerIndex, theme = _a.theme, hideColumns = _a.hideColumns;
    var _b = (0, react_2.useState)(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var handleExpandClick = function () {
        setIsExpanded(!isExpanded);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, seller.offers.map(function (offer, offerIndex) {
        if (isExpanded || offerIndex === 0) {
            return (react_1.default.createElement("tr", { key: offer.id, style: sellerIndex % 2 === 0
                    ? { backgroundColor: theme.row1 }
                    : { backgroundColor: theme.row2 } },
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.isAuthorized) && react_1.default.createElement(isAuthorized_1.default, { seller: seller }),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.distributor) && (react_1.default.createElement(Seller_1.default, { country: country, handleExpandClick: handleExpandClick, offer: offer, offerIndex: offerIndex, seller: seller, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.sku) && react_1.default.createElement(Sku_1.default, { offer: offer, theme: theme }),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.stock) && (react_1.default.createElement(Stock_1.default, { country: country, seller: seller, offer: offer, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.moq) && (react_1.default.createElement(Moq_1.default, { country: country, offer: offer, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.cta) && (react_1.default.createElement(Cta_1.default, { offer: offer, result: result, seller: seller, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.currency) && (react_1.default.createElement(currency_1.default, { country: country, offer: offer, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1) && (react_1.default.createElement(Price_1.default, { country: country, offer: offer, qty: 1, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10) && (react_1.default.createElement(Price_1.default, { country: country, offer: offer, qty: 10, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price100) && (react_1.default.createElement(Price_1.default, { country: country, offer: offer, qty: 100, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1000) && (react_1.default.createElement(Price_1.default, { country: country, offer: offer, qty: 1000, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10000) && (react_1.default.createElement(Price_1.default, { country: country, offer: offer, qty: 10000, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.updated) && (react_1.default.createElement(Updated_1.default, { offer: offer, seller: seller, theme: theme }))));
        }
        else {
            return null;
        }
    })));
};
exports.default = Offer;
