import React from "react";
import styled from "styled-components";
const Sku = ({ offer, theme }) => {
    return (React.createElement("td", null,
        React.createElement(StyledSku, { href: offer.clickUrl, rel: "nofollow", target: "_blank", style: { color: theme.text } }, offer.sku)));
};
const StyledSku = styled.a `
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export default Sku;
