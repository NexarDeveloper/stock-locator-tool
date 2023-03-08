import React from "react";
import { SupPartResultSet } from "../modules/graphql/generated";
import styled from "styled-components";
import Part from "./part";
import Sponsored from "./sponsored";
import { IncomingColors, IncomingColumns, IncomingParams } from "../types";
import { deviceWidths } from "../lib";

type ResultsProps = {
  currency: string;
  country: string;
  query: string;
  data: SupPartResultSet | undefined;
  searchParameters: IncomingParams;
  theme: IncomingColors;
  hideColumns?: IncomingColumns;
};

const SearchResults = ({
  currency,
  country,
  query,
  data,
  searchParameters,
  theme,
  hideColumns,
}: ResultsProps) => {
  if (!data || (data && !data.results)) {
    return <></>;
  }
  return (
    <>
      {data.results && (
        <>
          <ResultsHeader>
            <ResultsText style={{ color: theme.text }}>
              Showing {data.results.length}{" "}
              {data.results.length === 1 ? "result" : "results"} for {query}
            </ResultsText>
            <Sponsored theme={theme} />
          </ResultsHeader>
          <div>
            {data.results.map((result) => (
              <Part
                currency={currency}
                country={country}
                query={query}
                result={result}
                searchParameters={searchParameters}
                key={result.part.id}
                theme={theme}
                hideColumns={hideColumns}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;

  @media (max-width: ${deviceWidths.phone}) {
    flex-direction: column;
  }
`;

export const ResultsText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: ${deviceWidths.phone}) {
    margin-left: 0px;
  }
`;

export default SearchResults;
