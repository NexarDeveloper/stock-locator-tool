import React from "react";
import { RoundNexarLogo } from "./icons/RoundNexarLogo";
import styled from "styled-components";
const SearchResultsPlaceholder = ({ theme }) => {
    const table = new Array(7).fill(0);
    return (React.createElement(PlaceholderContainer, null,
        React.createElement(PlaceholderTable, { style: { border: `1px solid ${theme.tint}` } },
            React.createElement("thead", null,
                React.createElement("tr", null)),
            React.createElement("tbody", null, table.map((_, index) => {
                return (React.createElement("tr", { key: index, style: {
                        backgroundColor: index % 2 === 0 ? theme.row1 : theme.row2,
                    } },
                    React.createElement("td", null)));
            }))),
        React.createElement(IconContainer, null,
            React.createElement(RoundNexarLogo, null))));
};
const PlaceholderContainer = styled.div `
  position: relative;
  margin: 0 15px;
`;
const IconContainer = styled.span `
  position: absolute;
  left: calc(50% - 25.18px);
  top: calc(50% - 25.47px);

  svg {
    width: 50.36px;
    height: 50.94px;
  }
`;
const PlaceholderTable = styled.table `
  width: 100%;
  height: 250px;
  border-spacing: 0;

  thead > th {
    height: 50px;
  }

  tbody > tr {
    height: 32px;
  }
`;
export default SearchResultsPlaceholder;
