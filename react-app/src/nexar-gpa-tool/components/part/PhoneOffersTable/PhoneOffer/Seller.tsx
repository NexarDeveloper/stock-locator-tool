import React from "react";
import styled from "styled-components";
import { deviceWidths } from "../../../../lib";
import {
  SupPartSeller as SellerType,
  SupOffer as OfferType,
} from "../../../../lib/graphql/generated";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  offer: OfferType;
  seller: SellerType;
  theme: IncomingColors;
};

const Seller = ({ country, offer, seller, theme }: Props) => {
  return (
    <StyledSeller>
      <div>
        <SellerUrl style={{ color: theme.text }}>
          {seller.company.name}
        </SellerUrl>
      </div>
    </StyledSeller>
  );
};

const StyledSeller = styled.div`
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

const SellerUrl = styled.div`
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
