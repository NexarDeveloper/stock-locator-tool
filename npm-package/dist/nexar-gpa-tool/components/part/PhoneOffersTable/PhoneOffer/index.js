import React, { useState } from "react";
import styled from "styled-components";
import { deviceWidths } from "../../../../lib";
import AngleDown from "../../../icons/AngleDown";
import AngleUp from "../../../icons/AngleUp";
import IsAuthorized from "./IsAuthorized";
import Seller from "./Seller";
import Sku from "./Sku";
import Currency from "./Currency";
import Cta from "./Cta";
import Stock from "./Stock";
import Moq from "./Moq";
import Pkg from "./Pkg";
import PriceTable from "./PriceTable/Index";
const PhoneOffer = ({ country, currency, result, seller, theme }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (React.createElement(StyledPhoneOffer, { onClick: handleClick },
        React.createElement(OfferTitle, null,
            React.createElement(StyledAngle, { style: { color: theme.text } }, isExpanded ? React.createElement(AngleUp, null) : React.createElement(AngleDown, null)),
            React.createElement(TitleLeft, null,
                React.createElement(TitleTop, null,
                    React.createElement(IsAuthorized, { seller: seller }),
                    React.createElement(Seller, { country: country, offer: seller.offers[0], seller: seller, theme: theme })),
                React.createElement(TitleBottom, null,
                    React.createElement(Sku, { offer: seller.offers[0], isExpanded: isExpanded, theme: theme }),
                    !isExpanded && (React.createElement(Currency, { country: country, currency: currency, offer: seller.offers[0], theme: theme })))),
            !isExpanded && (React.createElement(Cta, { offer: seller.offers[0], seller: seller, result: result, isExpanded: isExpanded, theme: theme }))),
        isExpanded && (React.createElement(React.Fragment, null, seller.offers.map((offer, offerIndex) => (React.createElement("div", { key: `${seller.company.id}-${offer.id}` },
            offerIndex > 0 && (React.createElement(Seperator, { style: { backgroundColor: theme.tint } })),
            React.createElement(DetailsContainer, null,
                offerIndex > 0 && (React.createElement(Sku, { offer: offer, isExpanded: isExpanded, theme: theme })),
                React.createElement(InfoTable, { style: { border: `1px solid ${theme.tint}` } },
                    React.createElement(Stock, { offer: offer, seller: seller, country: country, theme: theme }),
                    React.createElement(Moq, { country: country, offer: offer, theme: theme }),
                    React.createElement(Pkg, { offer: offer, theme: theme })),
                React.createElement(PriceTable, { country: country, offer: offer, currency: currency, theme: theme }),
                React.createElement(Cta, { offer: offer, seller: seller, result: result, isExpanded: isExpanded, theme: theme })))))))));
};
const StyledPhoneOffer = styled.div `
  font-size: 14px;
  line-height: 17px;
  padding: 0 16px 0 0;
`;
const StyledAngle = styled.div `
  position: relative;
  display: flex;
  align-items: center;

  svg {
    display: block;
    margin-right: 8px;
    width: 9px;

    @media (min-width: ${deviceWidths.phone}) and (min-width: ${deviceWidths.tablet}) {
      padding-top: 6px;
    }
  }
`;
const OfferTitle = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px 15px;

  @media (max-width: ${deviceWidths.phone}) {
    padding-right: 0px;
    width: 100%;
  }
`;
const TitleLeft = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1 1 66%;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;
const TitleTop = styled.div `
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 9px;
`;
const TitleBottom = styled.div `
  justify-content: space-between;
  align-items: flex-end;
`;
const Seperator = styled.div `
  height: 1px;
  width: 100%;
  margin: 0 -16px;
  padding: 0 16px;
`;
const DetailsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoTable = styled.div `
  padding: 6px 0 12px;
  margin: 0 0 0 15px;
  width: 300px;
`;
export default PhoneOffer;
