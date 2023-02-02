import React from "react";
import styled from "styled-components";
import { deviceWidths } from "../../../../lib";
const Seller = ({ country, offer, seller, theme }) => {
    return (React.createElement(StyledSeller, null,
        React.createElement("div", null,
            React.createElement(SellerUrl, { style: { color: theme.text } }, seller.company.name))));
};
const StyledSeller = styled.div `
  font-size: 13px;
  padding: 6px;
  margin-left: 4px;

  @media (max-width: ${deviceWidths.phone}) {
    padding: 0px;
  }
  div {
    position: relative;
    flex-grow: 1;
    justify-content: space-between;
  }
`;
const SellerUrl = styled.div `
  text-decoration: none;
  display: inline-block;
  padding-right: 18px;
  max-width: 155px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  line-height: 19px;
`;
export default Seller;
