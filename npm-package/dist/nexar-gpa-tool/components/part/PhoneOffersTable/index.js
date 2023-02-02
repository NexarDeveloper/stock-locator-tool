import React from "react";
import styled from "styled-components";
import PhoneOffer from "./PhoneOffer";
const PhoneOffersTable = ({ country, currency, result, sellers, theme, }) => {
    return (React.createElement(OffersTable, { style: {
            borderWidth: "1px 0px",
            borderStyle: "solid",
            borderColor: theme.tint,
        } }, sellers.map((seller) => (React.createElement(PhoneOffer, { country: country, currency: currency, result: result, seller: seller, key: seller.company.id, theme: theme })))));
};
const OffersTable = styled.div `
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }
`;
export default PhoneOffersTable;
