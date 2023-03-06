import styled from "styled-components";
import Exchange from "../../../icons/Exchange";
import useHover from "../../../../hooks/useHover";
import { getFormattedNumber, getPricePoints } from "../../../../lib";
import { SupOffer as OfferType } from "../../../../lib/graphql/generated";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  currency: string;
  offer: OfferType;
  theme: IncomingColors;
};

const Currency = ({ country, currency, offer, theme }: Props) => {
  const [isHovered, handleMouseOut, handleMouseOver] = useHover();
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
    <StyledCurrency>
      <CurrencyLabel style={{ color: theme.text }}>{currency}</CurrencyLabel>
      {wasConverted && (
        <>
          <IconContainer
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            style={{ color: theme.text }}
          >
            <Exchange />
          </IconContainer>
          {isHovered && (
            <Tooltip>
              <TooltipText>
                <div>{`Prices were converted to ${pricePoint.convertedCurrency} from ${pricePoint.currency}.\n`}</div>
                <div>{`Rate: 1 ${pricePoint.currency} = ${getFormattedNumber(
                  pricePoint.conversionRate,
                  country,
                  2
                )} ${pricePoint.convertedCurrency}`}</div>
              </TooltipText>
            </Tooltip>
          )}
        </>
      )}
      {!wasConverted && <span></span>}
      <Price style={{ color: theme.text }}>
        {getFormattedNumber(pricePoint.convertedPrice, country, 2)}
      </Price>
    </StyledCurrency>
  );
};

const StyledCurrency = styled.div`
  font-size: 13px;
  padding: 6px;
  text-align: center;
  position: relative;
`;

const CurrencyLabel = styled.div`
  font-size: 12px;
  line-height: 15px;
  margin-right: 4px;
`;

const IconContainer = styled.div`
  svg {
    height: 17px;
  }
`;

const Tooltip = styled.div`
  width: 120px;
  top: 30px;
  right: -10px;

  &:before {
    right: calc(50% - 7px);
  }
`;

const TooltipText = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

const Price = styled.div`
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.text};
  font-size: 12px;
  line-height: 15px;
  margin-left: 4px;
`;

export default Currency;
