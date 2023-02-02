import React from "react";
import styled from "styled-components";
import { getFormattedNumber } from "../../../../lib";
const Moq = ({ country, offer, theme }) => {
    return (React.createElement(StyledMoq, { style: { color: theme.text } },
        React.createElement(MoqLabel, null, "MOQ"),
        React.createElement(MoqValue, null, offer.moq !== undefined &&
            (getFormattedNumber(offer.moq, country) || "-"))));
};
const StyledMoq = styled.div `
  font-size: 13px;
  padding: 6px;
  display: flex;
  justify-content: space-around;
`;
const MoqLabel = styled.div `
  font-size: 12px;
  line-height: 15px;
  margin-right: 8px;
`;
const MoqValue = styled.div `
  padding-right: 20px;
`;
export default Moq;
