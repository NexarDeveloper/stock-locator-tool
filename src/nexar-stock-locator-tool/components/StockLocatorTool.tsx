import React, { useEffect, useState } from "react";
import { runQuery } from "../nexarQuery";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import styled from "styled-components";
import { SupPartResultSet } from "../modules/graphql/generated";
import NoResultsFound from "./NoResultsFound";
import WebFont from "webfontloader";
import Footer from "./Footer";
import {
  IncomingParams,
  IncomingStyles,
  IncomingColors,
  IncomingColumns,
} from "../types";

const lightTheme: IncomingColors = {
  background: "#FFFFFF",
  button: "#3671B0",
  buttonSecondary: "#FFFFFF",
  keyText: "#2E654D",
  searchFormBackground: "#F4F2F1",
  partHeaderMpn: "#3671B0",
  partHeaderText: "#2A241F",
  row1: "#F4F2F1",
  row2: "#FFFFFF",
  tableHeaderText: "#080706",
  text: "#2A241F",
  tint: "#E3DFDA",
};

const darkTheme: IncomingColors = {
  background: "#05153E",
  button: "#0071E3",
  buttonSecondary: "#FFFFFF",
  highlight: "#FFD600",
  keyText: "#4FCCD0",
  partHeaderMpn: "#F2F3F5",
  partHeaderText: "#CCD0D9",
  row1: "#4E5973",
  row2: "#323E57",
  tableHeaderText: "#FFFFFF",
  text: "#F2F3F5",
  tint: "#9098AC",
};

type Props = {
  searchParameters: IncomingParams;
  styles?: IncomingStyles;
  hideColumns?: IncomingColumns;
};

export const StockLocatorTool = ({
  searchParameters,
  styles,
  hideColumns,
}: Props) => {
  const theme =
    styles?.customColors ?? (styles?.theme === "dark" ? darkTheme : lightTheme);
  const [query, setQuery] = useState<string>(searchParameters.q || "");
  const [lastSearch, setLastSearch] = useState<string>("");
  const [response, setResponse] = useState<SupPartResultSet>();
  const [country, setCountry] = useState<string>(
    searchParameters.country || "US"
  );
  const [currency, setCurrency] = useState<string>(
    searchParameters.currency || "USD"
  );

  const handleFormSubmit = async (
    query: string,
    country?: string,
    currency?: string
  ) => {
    searchParameters.q = query;
    searchParameters.country = country;
    searchParameters.currency = currency;
    setLastSearch(query);
    try {
      const response = await runQuery(searchParameters);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setResponse(data.data.supSearchMpn);
    } catch (error) {
      console.error(error);
    }
  };

  const hasResults = response && response.results;

  const [font, setFont] = useState("");
  useEffect(() => {
    let wantedFont = styles?.font || "Inter";
    WebFont.load({
      google: {
        families: [wantedFont],
      },
    });
    setFont(wantedFont);
  }, [styles?.font]);

  useEffect(() => {
    if (searchParameters.q) {
      handleFormSubmit(searchParameters.q, country, currency);
    }
  }, []);

  return (
    <StyledStockLocatorTool
      style={{ fontFamily: `${font}`, backgroundColor: `${theme.background}` }}
    >
      {!searchParameters.disableSearch && (
        <SearchForm
          query={query}
          setQuery={setQuery}
          country={country}
          setCountry={setCountry}
          currency={currency}
          setCurrency={setCurrency}
          handleFormSubmit={handleFormSubmit}
          theme={theme}
        />
      )}
      {hasResults && (
        <SearchResults
          country={country}
          currency={currency}
          query={lastSearch}
          data={response}
          searchParameters={searchParameters}
          theme={theme}
          hideColumns={hideColumns}
        />
      )}
      {!hasResults && (
        <NoResultsFound
          query={lastSearch}
          response={response}
          theme={theme}
          searchParameters={searchParameters}
        />
      )}
      <Footer theme={theme} />
    </StyledStockLocatorTool>
  );
};

const StyledStockLocatorTool = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 5px;
`;
