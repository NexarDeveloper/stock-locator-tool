var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import { runQuery } from "../nexarQuery";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import styled from "styled-components";
import NoResultsFound from "./NoResultsFound";
import WebFont from "webfontloader";
import Footer from "./Footer";
const lightTheme = {
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
const darkTheme = {
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
export const StockLocatorTool = ({ searchParameters, styles, hideColumns, }) => {
    var _a;
    const theme = (_a = styles === null || styles === void 0 ? void 0 : styles.customColors) !== null && _a !== void 0 ? _a : ((styles === null || styles === void 0 ? void 0 : styles.theme) === "dark" ? darkTheme : lightTheme);
    const [query, setQuery] = useState(searchParameters.q || "");
    const [lastSearch, setLastSearch] = useState("");
    const [response, setResponse] = useState();
    const [country, setCountry] = useState(searchParameters.country || "US");
    const [currency, setCurrency] = useState(searchParameters.currency || "USD");
    const handleFormSubmit = (query, country, currency) => __awaiter(void 0, void 0, void 0, function* () {
        searchParameters.q = query;
        searchParameters.country = country;
        searchParameters.currency = currency;
        setLastSearch(query);
        try {
            const response = yield runQuery(searchParameters);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = yield response.json();
            setResponse(data.data.supSearchMpn);
        }
        catch (error) {
            console.error(error);
        }
    });
    const hasResults = response && response.results;
    const [font, setFont] = useState("");
    useEffect(() => {
        let wantedFont = (styles === null || styles === void 0 ? void 0 : styles.font) || "Inter";
        WebFont.load({
            google: {
                families: [wantedFont],
            },
        });
        setFont(wantedFont);
    }, [styles === null || styles === void 0 ? void 0 : styles.font]);
    return (React.createElement(StyledStockLocatorTool, { style: { fontFamily: `${font}`, backgroundColor: `${theme.background}` } },
        React.createElement(SearchForm, { query: query, setQuery: setQuery, country: country, setCountry: setCountry, currency: currency, setCurrency: setCurrency, handleFormSubmit: handleFormSubmit, theme: theme }),
        hasResults && (React.createElement(SearchResults, { country: country, currency: currency, query: lastSearch, data: response, searchParameters: searchParameters, theme: theme, hideColumns: hideColumns })),
        !hasResults && (React.createElement(NoResultsFound, { query: lastSearch, response: response, theme: theme })),
        React.createElement(Footer, { theme: theme })));
};
const StyledStockLocatorTool = styled.div `
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 5px;
`;
