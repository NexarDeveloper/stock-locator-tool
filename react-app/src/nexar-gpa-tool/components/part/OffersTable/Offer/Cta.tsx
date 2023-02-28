import {
  SupPartResult as ResultType,
  SupPartSeller as SellerType,
  SupOffer as OfferType,
} from "../../../../lib/graphql/generated";
import { IncomingColors, InventoryLevel } from "../../../../types";
import styled from "styled-components";
import { getUrlSearchParams } from "../../../../lib";

type Props = {
  offer: OfferType;
  seller: SellerType;
  result: ResultType;
  theme: IncomingColors;
};

const Cta = ({ offer, seller, result, theme }: Props) => {
  return (
    <StyledCta>
      <div>
        {!seller.isBroker &&
          !seller.isRfq &&
          (offer.inventoryLevel > 0 ||
            offer.inventoryLevel ===
              InventoryLevel.in_stock_but_not_reported) && (
            <a
              href={offer.clickUrl}
              rel="noreferrer"
              target="_blank"
              style={{
                backgroundColor: theme.button,
                color: theme.buttonSecondary,
              }}
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
            style={{
              backgroundColor: theme.button,
              color: theme.buttonSecondary,
            }}
          >
            Send RFQ
          </a>
        )}
        {seller.isBroker && !seller.isRfq && <span>..</span>}
        {!seller.isBroker &&
          !seller.isRfq &&
          offer.inventoryLevel <= 0 &&
          offer.inventoryLevel !== InventoryLevel.in_stock_but_not_reported && (
            <span>..</span>
          )}
      </div>
    </StyledCta>
  );
};

const StyledCta = styled.td`
  text-align: center;

  a {
    text-decoration: none;
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 8px;
    display: inline-block;
    line-height: 15px;
    white-space: nowrap;
  }
`;

export default Cta;
