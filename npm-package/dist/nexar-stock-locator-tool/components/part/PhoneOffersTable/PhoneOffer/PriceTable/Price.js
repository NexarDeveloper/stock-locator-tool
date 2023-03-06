import React from "react";
import styled from "styled-components";
import { getPriceAtQty } from "../../../../../lib";
const Price = ({ country, isTable, offer, qty }) => {
    const price = getPriceAtQty(offer, qty, country, 2);
    if (!price) {
        return null;
    }
    return (React.createElement(PriceContainer, null,
        isTable && React.createElement(PriceLabel, null, qty),
        React.createElement(PriceValue, null, price)));
};
const PriceContainer = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
`;
const PriceLabel = styled.div `
  width: 100px;
  padding-left: 10px;
`;
const PriceValue = styled.div `
  padding-right: 20px;
  text-align: right;
`;
export default Price;
