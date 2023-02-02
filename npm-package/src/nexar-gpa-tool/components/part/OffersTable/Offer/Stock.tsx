import React from "react";
import styled from "styled-components";
import {
  SupPartSeller as SellerType,
  SupOffer as OfferType,
} from "../../../../modules/graphql/generated";
import { getStock } from "../../../../lib";
import { IncomingColors } from "../../../../types";

type Props = {
  offer: OfferType;
  seller: SellerType;
  country: string;
  theme: IncomingColors;
};

const Stock = ({ country, offer, seller, theme }: Props) => {
  return (
    <StyledStock style={{ color: theme.keyText }}>
      {getStock(offer.inventoryLevel, seller && seller.isBroker, country)}
    </StyledStock>
  );
};

const StyledStock = styled.td`
  font-size: 13px;
  padding: 6px;
  text-align: right;
`;

export default Stock;
