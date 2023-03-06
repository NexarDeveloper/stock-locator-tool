import { SupOffer as OfferType } from "../../../../lib/graphql/generated";
import { getPriceAtQty } from "../../../../lib";
import styled from "styled-components";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  offer: OfferType;
  qty: number;
  theme: IncomingColors;
};

const Price = ({ country, offer, qty, theme }: Props) => {
  return (
    <StyledPrice style={{ color: theme.keyText }}>
      {getPriceAtQty(offer, qty, country)}
    </StyledPrice>
  );
};

const StyledPrice = styled.td`
  font-size: 13px;
  padding: 6px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Price;
