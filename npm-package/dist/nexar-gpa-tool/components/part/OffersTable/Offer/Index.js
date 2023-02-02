import React from "react";
import { useState } from "react";
import IsAuthorized from "./isAuthorized";
import Seller from "./Seller";
import Sku from "./Sku";
import Stock from "./Stock";
import Moq from "./Moq";
import Cta from "./Cta";
import Currency from "./currency";
import Price from "./Price";
import Updated from "./Updated";
const Offer = ({ country, result, seller, sellerIndex, theme, hideColumns, }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (React.createElement(React.Fragment, null, seller.offers.map((offer, offerIndex) => {
        if (isExpanded || offerIndex === 0) {
            return (React.createElement("tr", { key: offer.id, style: sellerIndex % 2 === 0
                    ? { backgroundColor: theme.row1 }
                    : { backgroundColor: theme.row2 } },
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.isAuthorized) && React.createElement(IsAuthorized, { seller: seller }),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.distributor) && (React.createElement(Seller, { country: country, handleExpandClick: handleExpandClick, offer: offer, offerIndex: offerIndex, seller: seller, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.sku) && React.createElement(Sku, { offer: offer, theme: theme }),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.stock) && (React.createElement(Stock, { country: country, seller: seller, offer: offer, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.moq) && (React.createElement(Moq, { country: country, offer: offer, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.cta) && (React.createElement(Cta, { offer: offer, result: result, seller: seller, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.currency) && (React.createElement(Currency, { country: country, offer: offer, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1) && (React.createElement(Price, { country: country, offer: offer, qty: 1, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10) && (React.createElement(Price, { country: country, offer: offer, qty: 10, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price100) && (React.createElement(Price, { country: country, offer: offer, qty: 100, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1000) && (React.createElement(Price, { country: country, offer: offer, qty: 1000, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10000) && (React.createElement(Price, { country: country, offer: offer, qty: 10000, theme: theme })),
                !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.updated) && (React.createElement(Updated, { offer: offer, seller: seller, theme: theme }))));
        }
        else {
            return null;
        }
    })));
};
export default Offer;
