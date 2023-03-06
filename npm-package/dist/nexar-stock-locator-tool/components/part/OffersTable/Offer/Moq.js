import React from "react";
import styled from "styled-components";
import { getFormattedNumber } from "../../../../lib";
const Moq = ({ country, offer, theme }) => {
    return (React.createElement(StyledMoq, { style: { color: theme.tableHeaderText } }, offer.moq !== undefined && getFormattedNumber(offer.moq, country)));
};
const StyledMoq = styled.td `
  font-size: 13px;
  padding: 6px;
  text-align: right;
`;
export default Moq;
