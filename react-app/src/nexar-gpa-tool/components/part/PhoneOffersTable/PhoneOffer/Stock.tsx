import styled from "styled-components";
import { getStock } from "../../../../lib";
import {
  SupPartSeller as SellerType,
  SupOffer as OfferType,
} from "../../../../modules/graphql/generated";
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
      <StockLabel>STOCK</StockLabel>
      <StockValue>
        {getStock(offer.inventoryLevel, seller && seller.isBroker, country)}
      </StockValue>
    </StyledStock>
  );
};

const StyledStock = styled.div`
  font-size: 13px;
  padding: 6px;
  display: flex;
  justify-content: space-around;
`;

const StockLabel = styled.div`
  font-size: 12px;
  line-height: 15px;
  margin-right: 8px;
`;

const StockValue = styled.div`
  padding-right: 20px;
`;

export default Stock;
