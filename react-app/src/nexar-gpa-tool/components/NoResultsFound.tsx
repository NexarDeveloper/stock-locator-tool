import { SupPartResultSet } from "../lib/graphql/generated";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";
import Sponsored from "./Sponsored";
import { ResultsHeader, ResultsText } from "./SearchResults";
import { IncomingColors } from "../types";

type Props = {
  query: string;
  response: SupPartResultSet | undefined;
  theme: IncomingColors;
};

const NoResultsFound = ({ query, response, theme }: Props) => {
  return (
    <>
      <ResultsHeader>
        <ResultsText style={{ color: theme.text }}>
          {response && !response.results && (
            <span>No results found for {query}</span>
          )}
          {!response && <span> Enter a MPN to search</span>}
        </ResultsText>
        <Sponsored theme={theme} />
      </ResultsHeader>
      <SearchResultsPlaceholder theme={theme} />
    </>
  );
};

export default NoResultsFound;
