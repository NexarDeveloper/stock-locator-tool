import React from "react";
import { InventoryLevel } from "../../../../types";
import styled from "styled-components";
import { getUrlSearchParams } from "../../../../lib";
const Cta = ({ offer, seller, result, theme }) => {
    return (React.createElement(StyledCta, null,
        React.createElement("div", null,
            !seller.isBroker &&
                !seller.isRfq &&
                (offer.inventoryLevel > 0 ||
                    offer.inventoryLevel ===
                        InventoryLevel.in_stock_but_not_reported) && (React.createElement("a", { href: offer.clickUrl, rel: "noreferrer", target: "_blank", style: {
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                } }, "Visit site")),
            seller.isRfq && (React.createElement("a", { href: `/rfq/generate?${getUrlSearchParams({
                    ppid: result.part.id,
                    vpid: offer.id,
                })}`, rel: "noreferrer", target: "_blank", style: {
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                } }, "Send RFQ")),
            seller.isBroker && !seller.isRfq && React.createElement("span", null, ".."),
            !seller.isBroker &&
                !seller.isRfq &&
                offer.inventoryLevel <= 0 &&
                offer.inventoryLevel !== InventoryLevel.in_stock_but_not_reported && (React.createElement("span", null, "..")))));
};
const StyledCta = styled.td `
  text-align: center;

  a {
    text-decoration: none;
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 8px;
    display: inline-block;
    line-height: 15px;
    white-space: nowrap;
  }
`;
export default Cta;
