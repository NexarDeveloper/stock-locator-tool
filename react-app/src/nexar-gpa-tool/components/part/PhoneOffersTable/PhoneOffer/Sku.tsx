import styled from "styled-components";
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";

type Props = {
  isExpanded: Boolean;
  offer: OfferType;
  theme: IncomingColors;
};

const Sku = ({ isExpanded, offer, theme }: Props) => {
  return (
    <StyledSku style={{ color: theme.text }}>
      <SkuLabel>SKU</SkuLabel>
      <SkuValue
        style={
          isExpanded ? { overflow: "visible" } : { textOverflow: "ellipsis" }
        }
      >
        {offer.sku}
      </SkuValue>
    </StyledSku>
  );
};

const StyledSku = styled.div`
  font-size: 13px;
  padding: 6px;

  span {
    text-decoration: none;
    max-width: 283px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    max-width: 75px;
  }
`;

const SkuLabel = styled.span`
  font-size: 12px;
  line-height: 15px;
  margin-right: 4px;
`;

const SkuValue = styled.span`
  font-size: 14px;
  line-height: 17px;
  margin-left: 4px;
`;

export default Sku;
