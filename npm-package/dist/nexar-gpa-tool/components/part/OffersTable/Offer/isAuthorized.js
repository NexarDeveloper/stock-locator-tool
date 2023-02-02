import React from "react";
import styled from "styled-components";
import Star from "../../../icons/Star";
import EmptyStar from "../../../icons/EmptyStar";
const IsAuthorized = ({ seller }) => {
    const title = seller.isAuthorized && !seller.isBroker
        ? "Authorized Distributor"
        : "Non-Authorized Stocking Distributor";
    return (React.createElement(StarContainer, null,
        React.createElement("a", { href: "https://octopart.com/authorized", tabIndex: -1, title: title },
            React.createElement(StarIcon, null,
                seller.isAuthorized && !seller.isBroker && React.createElement(Star, null),
                !seller.isAuthorized && !seller.isBroker && React.createElement(EmptyStar, null)))));
};
const StarContainer = styled.td `
  position: relative;
`;
const StarIcon = styled.span `
  svg {
    display: block;
    height: 20px;
    margin: auto;
    width: 9px;
  }
`;
export default IsAuthorized;
