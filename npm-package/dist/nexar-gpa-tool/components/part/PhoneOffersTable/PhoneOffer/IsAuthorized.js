import React from "react";
import styled from "styled-components";
import EmptyStar from "../../../icons/EmptyStar";
import Star from "../../../icons/Star";
const IsAuthorized = ({ seller }) => {
    return (React.createElement(StarIcon, null,
        seller.isAuthorized && !seller.isBroker && React.createElement(Star, null),
        !seller.isAuthorized && !seller.isBroker && React.createElement(EmptyStar, null)));
};
const StarIcon = styled.span `
  display: flex;
  align-content: center;
  height: 100%;
  svg {
    display: block;
    height: 20px;
    margin: auto;
    width: 9px;
  }
`;
export default IsAuthorized;
