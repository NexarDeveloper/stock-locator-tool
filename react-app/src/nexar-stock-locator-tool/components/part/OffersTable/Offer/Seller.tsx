import styled from "styled-components";
import { deviceWidths } from "../../../../lib";
import { getFormattedNumber } from "../../../../lib";
import {
  SupOffer as Offer,
  SupPartSeller as SellerType,
} from "../../../../lib/graphql/generated";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  handleExpandClick: () => void;
  offer: Offer;
  offerIndex: number;
  seller: SellerType;
  theme: IncomingColors;
};

const Seller = ({
  country,
  offer,
  seller,
  offerIndex,
  handleExpandClick,
  theme,
}: Props) => {
  return (
    <StyledSeller>
      <SellerContent>
        <StyledSellerUrl
          href={offer.clickUrl}
          rel="nofollow"
          target="_blank"
          style={{ color: theme.text }}
        >
          {seller.company.name}
        </StyledSellerUrl>
        {offerIndex === 0 && seller.offers.length > 1 && (
          <StyledExpander
            onClick={handleExpandClick}
            style={{
              border: `1px solid ${theme.tint}`,
              color: theme.tableHeaderText,
            }}
          >
            {getFormattedNumber(seller.offers.length, country)}
          </StyledExpander>
        )}
      </SellerContent>
    </StyledSeller>
  );
};

const StyledSeller = styled.td`
  font-size: 13px;
  justify-content: space-between;
  display: table-cell;
  padding: 6px;
  @media (max-width: ${deviceWidths.phone}) {
    padding: 0px;
  }
  div {
    position: relative;
  }
`;

const SellerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const StyledSellerUrl = styled.a`
  text-decoration: none;
  height: 100%;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledExpander = styled.div`
  width: 15px;
  height: 15px;
  line-height: 12px;
  font-size: 7px;
  /* display: block; */
  margin-right: 10px;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${deviceWidths.tablet}) {
    font-size: 10px;
    line-height: 13px;
    padding-left: 4px;
  }

  &:before,
  &:after,
  & {
    box-sizing: border-box;
  }
`;

export default Seller;
