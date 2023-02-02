import React from "react";
import styled from "styled-components";
import { getUrlSearchParams } from "../../../../lib";
import { InventoryLevel } from "../../../../types";
const Cta = ({ offer, seller, result, isExpanded, theme }) => {
    return (React.createElement(StyledCta, { style: isExpanded ? { justifyContent: "center" } : { justifyContent: "right" } },
        React.createElement("div", { style: { backgroundColor: theme.button } },
            !seller.isBroker &&
                !seller.isRfq &&
                (offer.inventoryLevel > 0 ||
                    offer.inventoryLevel ===
                        InventoryLevel.in_stock_but_not_reported) && (React.createElement("a", { href: offer.clickUrl, rel: "noreferrer", target: "_blank", style: { color: theme.buttonSecondary } }, "Visit site")),
            seller.isRfq && (React.createElement("a", { href: `/rfq/generate?${getUrlSearchParams({
                    ppid: result.part.id,
                    vpid: offer.id,
                })}`, rel: "noreferrer", target: "_blank", style: { color: theme.buttonSecondary } }, "Send RFQ")))));
};
const StyledCta = styled.div `
  display: flex;
  flex: 1 1 50%;
  align-items: stretch;
  margin: 5px 5px 5px 5px;
  max-width: 60px;

  div {
    display: flex;
    border-radius: 4px;

    a {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 4px 16px;
      text-decoration: none;
    }
  }
`;
export default Cta;
