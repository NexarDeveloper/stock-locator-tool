import { getFormattedNumber, getPricePoints } from "../../../../lib";
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import styled from "styled-components";
import Exchange from "../../../icons/Exchange";
import useHover from "../../../../hooks/useHover";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  offer: OfferType;
  theme: IncomingColors;
};

const Currency = ({ country, offer, theme }: Props) => {
  const [isHovered, handleMouseOut, handleMouseOver] = useHover();
  const pricePoints = getPricePoints(offer.prices);
  if (pricePoints.length === 0) {
    return (
      <td>
        <span />
      </td>
    );
  }
  const pricePoint = pricePoints[0];
  const wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
  return (
    <StyledCurrency>
      {wasConverted && (
        <>
          <ExchangeIconContainer
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            style={{ color: theme.keyText }}
          >
            <Exchange />
          </ExchangeIconContainer>
          {isHovered && (
            <Tooltip
              onMouseOut={handleMouseOut}
              onMouseOver={handleMouseOver}
              style={{ backgroundColor: "white", color: "black" }}
            >
              <TooltipContent>
                <TooltipText>
                  <div>{`Prices were converted to ${pricePoint.convertedCurrency} from ${pricePoint.currency}.\n`}</div>
                  <div>{`Rate: 1 ${pricePoint.currency} = ${getFormattedNumber(
                    pricePoint.conversionRate,
                    country,
                    2
                  )} ${pricePoint.convertedCurrency}`}</div>
                </TooltipText>
              </TooltipContent>
            </Tooltip>
          )}
        </>
      )}
      {!wasConverted && <span />}
    </StyledCurrency>
  );
};

const StyledCurrency = styled.td`
  font-size: 13px;
  padding: 6px;
  text-align: center;
  position: relative;
`;

const ExchangeIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  svg {
    height: 17px;
  }
`;

const Tooltip = styled.div`
  border-radius: 4px;
  display: block;
  position: absolute;
  right: -20px;
  top: 30px;
  width: 120px;
  &:before {
    background-color: inherit;
    border: inherit;
    box-shadow: inherit;
    content: "";
    display: block;
    height: 12px;
    position: absolute;
    right: 50%;
    top: -6px;
    transform: rotate(-45deg);
    width: 12px;
    z-index: 1;
  }
`;

const TooltipContent = styled.div`
  background: inherit;
  border-radius: inherit;
  padding: 5px 4px 5px 4px;
  position: relative;
  z-index: 2;
`;

const TooltipText = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

export default Currency;
