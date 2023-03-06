import { SupOffer as OfferType } from "../../../../lib/graphql/generated";
import styled from "styled-components";
import { IncomingColors } from "../../../../types";

type Props = {
  offer: OfferType;
  theme: IncomingColors;
};

const Sku = ({ offer, theme }: Props) => {
  return (
    <td>
      <StyledSku
        href={offer.clickUrl}
        rel="nofollow"
        target="_blank"
        style={{ color: theme.text }}
      >
        {offer.sku}
      </StyledSku>
    </td>
  );
};

const StyledSku = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Sku;
