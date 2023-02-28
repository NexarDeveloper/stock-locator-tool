import React from "react";
import styled from "styled-components";
import { getFormattedNumber } from "../../../../lib";
import { SupOffer as OfferType } from "../../../../lib/graphql/generated";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  offer: OfferType;
  theme: IncomingColors;
};
const Moq = ({ country, offer, theme }: Props) => {
  return (
    <StyledMoq style={{ color: theme.text }}>
      <MoqLabel>MOQ</MoqLabel>
      <MoqValue>
        {offer.moq !== undefined &&
          (getFormattedNumber(offer.moq, country) || "-")}
      </MoqValue>
    </StyledMoq>
  );
};

const StyledMoq = styled.div`
  font-size: 13px;
  padding: 6px;
  display: flex;
  justify-content: space-around;
`;

const MoqLabel = styled.div`
  font-size: 12px;
  line-height: 15px;
  margin-right: 8px;
`;

const MoqValue = styled.div`
  padding-right: 20px;
`;

export default Moq;
