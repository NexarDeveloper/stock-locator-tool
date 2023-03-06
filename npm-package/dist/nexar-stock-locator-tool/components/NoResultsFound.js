import React from "react";
import SearchResultsPlaceholder from "./searchResultsPlaceholder";
import Sponsored from "./sponsored";
import { ResultsHeader, ResultsText } from "./searchResults";
const NoResultsFound = ({ query, response, theme }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ResultsHeader, null,
            React.createElement(ResultsText, { style: { color: theme.text } },
                response && !response.results && (React.createElement("span", null,
                    "No results found for ",
                    query)),
                !response && React.createElement("span", null, " Enter a MPN to search")),
            React.createElement(Sponsored, { theme: theme })),
        React.createElement(SearchResultsPlaceholder, { theme: theme })));
};
export default NoResultsFound;
