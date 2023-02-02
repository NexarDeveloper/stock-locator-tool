import React from "react";
import styled from "styled-components";
import Exchange from "../../../icons/Exchange";
import useHover from "../../../../hooks/useHover";
import { getFormattedNumber, getPricePoints } from "../../../../lib";
const Currency = ({ country, currency, offer, theme }) => {
    const [isHovered, handleMouseOut, handleMouseOver] = useHover();
    const pricePoints = getPricePoints(offer.prices);
    if (pricePoints.length === 0) {
        return (React.createElement(StyledCurrency, null,
            React.createElement("span", null)));
    }
    const pricePoint = pricePoints[0];
    const wasConverted = pricePoint.currency !== pricePoint.convertedCurrency;
    return (React.createElement(StyledCurrency, null,
        React.createElement(CurrencyLabel, { style: { color: theme.text } }, currency),
        wasConverted && (React.createElement(React.Fragment, null,
            React.createElement(IconContainer, { onMouseOut: handleMouseOut, onMouseOver: handleMouseOver, style: { color: theme.text } },
                React.createElement(Exchange, null)),
            isHovered && (React.createElement(Tooltip, null,
                React.createElement(TooltipText, null,
                    React.createElement("div", null, `Prices were converted to ${pricePoint.convertedCurrency} from ${pricePoint.currency}.\n`),
                    React.createElement("div", null, `Rate: 1 ${pricePoint.currency} = ${getFormattedNumber(pricePoint.conversionRate, country, 2)} ${pricePoint.convertedCurrency}`)))))),
        !wasConverted && React.createElement("span", null),
        React.createElement(Price, { style: { color: theme.text } }, getFormattedNumber(pricePoint.convertedPrice, country, 2))));
};
const StyledCurrency = styled.div `
  font-size: 13px;
  padding: 6px;
  text-align: center;
  position: relative;
`;
const CurrencyLabel = styled.div `
  font-size: 12px;
  line-height: 15px;
  margin-right: 4px;
`;
const IconContainer = styled.div `
  svg {
    height: 17px;
  }
`;
const Tooltip = styled.div `
  width: 120px;
  top: 30px;
  right: -10px;

  &:before {
    right: calc(50% - 7px);
  }
`;
const TooltipText = styled.div `
  font-size: 10px;
  line-height: 12px;
`;
const Price = styled.div `
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.text};
  font-size: 12px;
  line-height: 15px;
  margin-left: 4px;
`;
export default Currency;
