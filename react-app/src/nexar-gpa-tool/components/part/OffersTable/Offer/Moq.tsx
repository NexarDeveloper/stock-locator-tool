import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import styled from "styled-components";
import { getFormattedNumber } from "../../../../lib";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  offer: OfferType;
  theme: IncomingColors;
};

const Moq = ({ country, offer, theme }: Props) => {
  return (
    <StyledMoq style={{ color: theme.tableHeaderText }}>
      {offer.moq !== undefined && getFormattedNumber(offer.moq, country)}
    </StyledMoq>
  );
};

const StyledMoq = styled.td`
  font-size: 13px;
  padding: 6px;
  text-align: right;
`;

export default Moq;
