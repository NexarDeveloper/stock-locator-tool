import React from "react";
import { getPriceAtQty } from "../../../../lib";
import styled from "styled-components";
const Price = ({ country, offer, qty, theme }) => {
    return (React.createElement(StyledPrice, { style: { color: theme.keyText } }, getPriceAtQty(offer, qty, country)));
};
const StyledPrice = styled.td `
  font-size: 13px;
  padding: 6px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default Price;
