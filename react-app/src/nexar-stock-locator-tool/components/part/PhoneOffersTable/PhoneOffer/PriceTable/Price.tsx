import styled from "styled-components";
import { getPriceAtQty } from "../../../../../lib";
import { SupOffer as OfferType } from "../../../../../lib/graphql/generated";

type Props = {
  country: string;
  isTable?: boolean;
  offer: OfferType;
  qty: number;
};

const Price = ({ country, isTable, offer, qty }: Props) => {
  const price = getPriceAtQty(offer, qty, country, 2);
  if (!price) {
    return null;
  }
  return (
    <PriceContainer>
      {isTable && <PriceLabel>{qty}</PriceLabel>}
      <PriceValue>{price}</PriceValue>
    </PriceContainer>
  );
};

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
`;

const PriceLabel = styled.div`
  width: 100px;
  padding-left: 10px;
`;

const PriceValue = styled.div`
  padding-right: 20px;
  text-align: right;
`;

export default Price;
