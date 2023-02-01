import styled from "styled-components";
import Exchange from "../../../../icons/Exchange";
import { getPricePoints } from "../../../../../lib";
import { SupOffer as OfferType } from "../../../../../modules/graphql/generated";
import Price from "./Price";
import { IncomingColors } from "../../../../../types";

type Props = {
  country: string;
  currency: string;
  offer: OfferType;
  theme: IncomingColors;
};

const PriceTable = ({ country, currency, offer, theme }: Props) => {
  const pricePoints = getPricePoints(offer.prices);
  if (pricePoints.length === 0) {
    return (
      <StyledCurrency>
        <span />
      </StyledCurrency>
    );
  }
  const pricePoint = pricePoints[0];
  const wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
  return (
    <StyledPriceTable style={{ color: theme.keyText }}>
      <TableHeader>
        <PriceBreaks>PRICE BREAKS</PriceBreaks>
        <StyledCurrency>
          <span>{currency}</span>
          {wasConverted && (
            <IconContainer>
              <Exchange />
            </IconContainer>
          )}
        </StyledCurrency>
      </TableHeader>
      <Price isTable country={country} offer={offer} qty={1} />
      <Price isTable country={country} offer={offer} qty={10} />
      <Price isTable country={country} offer={offer} qty={100} />
      <Price isTable country={country} offer={offer} qty={1000} />
      <Price isTable country={country} offer={offer} qty={10000} />
    </StyledPriceTable>
  );
};

const StyledPriceTable = styled.div`
  margin: 0 0 12px 15px;
  font-size: 12px;
  width: 300px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
`;

const PriceBreaks = styled.div`
  padding: 0;
  align-items: center;
`;

const StyledCurrency = styled.div`
  padding-right: 20px;
  align-items: center;
  display: flex;
`;

const IconContainer = styled.div`
  margin-left: 2px;
  svg {
    display: block;
    height: 20px;
    margin: auto;
    width: 10px;
  }
`;

export default PriceTable;
