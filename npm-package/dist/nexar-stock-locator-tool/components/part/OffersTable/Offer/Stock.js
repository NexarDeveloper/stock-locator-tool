import React from "react";
import styled from "styled-components";
import { getStock } from "../../../../lib";
const Stock = ({ country, offer, seller, theme }) => {
    return (React.createElement(StyledStock, { style: { color: theme.keyText } }, getStock(offer.inventoryLevel, seller && seller.isBroker, country)));
};
const StyledStock = styled.td `
  font-size: 13px;
  padding: 6px;
  text-align: right;
`;
export default Stock;
