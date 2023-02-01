import styled from "styled-components";
import { getUrlSearchParams } from "../../../../lib";
import {
  SupPartResult as ResultType,
  SupPartSeller as SellerType,
  SupOffer as OfferType,
} from "../../../../modules/graphql/generated";
import { IncomingColors, InventoryLevel } from "../../../../types";

type Props = {
  offer: OfferType;
  seller: SellerType;
  result: ResultType;
  isExpanded: Boolean;
  theme: IncomingColors;
};

const Cta = ({ offer, seller, result, isExpanded, theme }: Props) => {
  return (
    <StyledCta
      style={
        isExpanded ? { justifyContent: "center" } : { justifyContent: "right" }
      }
    >
      <div style={{ backgroundColor: theme.button }}>
        {!seller.isBroker &&
          !seller.isRfq &&
          (offer.inventoryLevel > 0 ||
            offer.inventoryLevel ===
              InventoryLevel.in_stock_but_not_reported) && (
            <a
              href={offer.clickUrl}
              rel="noreferrer"
              target="_blank"
              style={{ color: theme.buttonSecondary }}
            >
              Visit site
            </a>
          )}
        {seller.isRfq && (
          <a
            href={`/rfq/generate?${getUrlSearchParams({
              ppid: result.part.id,
              vpid: offer.id,
            })}`}
            rel="noreferrer"
            target="_blank"
            style={{ color: theme.buttonSecondary }}
          >
            Send RFQ
          </a>
        )}
      </div>
    </StyledCta>
  );
};

const StyledCta = styled.div`
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
