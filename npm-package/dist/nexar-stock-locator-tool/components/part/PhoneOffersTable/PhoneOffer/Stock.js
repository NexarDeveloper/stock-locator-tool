import React from "react";
import styled from "styled-components";
import { getStock } from "../../../../lib";
const Stock = ({ country, offer, seller, theme }) => {
    return (React.createElement(StyledStock, { style: { color: theme.keyText } },
        React.createElement(StockLabel, null, "STOCK"),
        React.createElement(StockValue, null, getStock(offer.inventoryLevel, seller && seller.isBroker, country))));
};
const StyledStock = styled.div `
  font-size: 13px;
  padding: 6px;
  display: flex;
  justify-content: space-around;
`;
const StockLabel = styled.div `
  font-size: 12px;
  line-height: 15px;
  margin-right: 8px;
`;
const StockValue = styled.div `
  padding-right: 20px;
`;
export default Stock;
