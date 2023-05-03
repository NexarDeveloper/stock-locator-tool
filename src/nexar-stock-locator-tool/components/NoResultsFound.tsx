import React from "react";
import { SupPartResultSet } from "../modules/graphql/generated";
import SearchResultsPlaceholder from "./searchResultsPlaceholder";
import Sponsored from "./sponsored";
import { ResultsHeader, ResultsText } from "./searchResults";
import { IncomingColors, IncomingParams } from "../types";

type Props = {
  query: string;
  response: SupPartResultSet | undefined;
  theme: IncomingColors;
  searchParameters: IncomingParams;
};

const NoResultsFound = ({
  query,
  response,
  theme,
  searchParameters,
}: Props) => {
  return (
    <>
      {!searchParameters.disableSearch && (
        <ResultsHeader>
          <ResultsText style={{ color: theme.text }}>
            {response && !response.results && (
              <span>No results found for {query}</span>
            )}
            {!response && <span> Enter a MPN to search</span>}
          </ResultsText>
          <Sponsored theme={theme} />
        </ResultsHeader>
      )}
      <SearchResultsPlaceholder theme={theme} />
    </>
  );
};

export default NoResultsFound;
