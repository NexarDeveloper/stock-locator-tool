import React from "react";
import styled from "styled-components";
import Part from "./part";
import Sponsored from "./sponsored";
import { deviceWidths } from "../lib";
const SearchResults = ({ currency, country, query, data, searchParameters, theme, hideColumns, }) => {
    if (!data || (data && !data.results)) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(React.Fragment, null, data.results && (React.createElement(React.Fragment, null,
        React.createElement(ResultsHeader, null,
            React.createElement(ResultsText, { style: { color: theme.text } },
                "Showing ",
                data.results.length,
                " ",
                data.results.length === 1 ? "result" : "results",
                " for ",
                query),
            React.createElement(Sponsored, { theme: theme })),
        React.createElement("div", null, data.results.map((result) => (React.createElement(Part, { currency: currency, country: country, query: query, result: result, searchParameters: searchParameters, key: result.part.id, theme: theme, hideColumns: hideColumns }))))))));
};
export const ResultsHeader = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;

  @media (max-width: ${deviceWidths.phone}) {
    flex-direction: column;
  }
`;
export const ResultsText = styled.div `
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: ${deviceWidths.phone}) {
    margin-left: 0px;
  }
`;
export default SearchResults;
