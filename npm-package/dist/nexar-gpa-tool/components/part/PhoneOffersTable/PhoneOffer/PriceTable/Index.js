import React from "react";
import styled from "styled-components";
import Exchange from "../../../../icons/Exchange";
import { getPricePoints } from "../../../../../lib";
import Price from "./Price";
const PriceTable = ({ country, currency, offer, theme }) => {
    const pricePoints = getPricePoints(offer.prices);
    if (pricePoints.length === 0) {
        return (React.createElement(StyledCurrency, null,
            React.createElement("span", null)));
    }
    const pricePoint = pricePoints[0];
    const wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
    return (React.createElement(StyledPriceTable, { style: { color: theme.keyText } },
        React.createElement(TableHeader, null,
            React.createElement(PriceBreaks, null, "PRICE BREAKS"),
            React.createElement(StyledCurrency, null,
                React.createElement("span", null, currency),
                wasConverted && (React.createElement(IconContainer, null,
                    React.createElement(Exchange, null))))),
        React.createElement(Price, { isTable: true, country: country, offer: offer, qty: 1 }),
        React.createElement(Price, { isTable: true, country: country, offer: offer, qty: 10 }),
        React.createElement(Price, { isTable: true, country: country, offer: offer, qty: 100 }),
        React.createElement(Price, { isTable: true, country: country, offer: offer, qty: 1000 }),
        React.createElement(Price, { isTable: true, country: country, offer: offer, qty: 10000 })));
};
const StyledPriceTable = styled.div `
  margin: 0 0 12px 15px;
  font-size: 12px;
  width: 300px;
`;
const TableHeader = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
`;
const PriceBreaks = styled.div `
  padding: 0;
  align-items: center;
`;
const StyledCurrency = styled.div `
  padding-right: 20px;
  align-items: center;
  display: flex;
`;
const IconContainer = styled.div `
  margin-left: 2px;
  svg {
    display: block;
    height: 20px;
    margin: auto;
    width: 10px;
  }
`;
export default PriceTable;
