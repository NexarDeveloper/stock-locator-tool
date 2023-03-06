import React from "react";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { deviceWidths } from "../../../lib";
import Mpn from "./Mpn";
const Header = ({ query, result, searchParameters, theme }) => {
    var _a, _b;
    return (React.createElement(PartHeader, { style: { backgroundColor: (_a = theme.partHeaderBackground) !== null && _a !== void 0 ? _a : "inherit" } },
        searchParameters.enableManufacturerLink &&
            result.part.manufacturerUrl && (React.createElement("a", { href: result.part.manufacturerUrl, rel: "noreferrer", target: "_blank" },
            React.createElement(Mpn, { query: query, result: result, theme: theme }))),
        searchParameters.enableManufacturerLink &&
            !result.part.manufacturerUrl && (React.createElement(Mpn, { query: query, result: result, theme: theme })),
        !searchParameters.enableManufacturerLink && (React.createElement("a", { href: `https://octopart.com${result.part.slug}`, rel: "noreferrer", target: "_blank" },
            React.createElement(Mpn, { query: query, result: result, theme: theme }))),
        result.akaMpn && (React.createElement(PartAka, null,
            React.createElement("span", null, "Also known as "),
            React.createElement(Highlighter, { autoEscape: true, searchWords: [query], textToHighlight: result.akaMpn }))),
        result.description && (React.createElement(PartDescription, { style: { color: (_b = theme.partHeaderText) !== null && _b !== void 0 ? _b : theme.text } }, result.part.descriptions[0].text))));
};
const PartHeader = styled.div `
  padding: 10px 10px 10px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px 10px 0px 0px;

  @media (max-width: ${deviceWidths.tablet}) {
    border-radius: 5px;
    padding-left: 16px;

    a {
      display: inline-block;
    }
  }
`;
const PartAka = styled.div `
  font-size: 12px;
  line-height: 17px;
  font-style: italic;
`;
const PartDescription = styled.div `
  font-size: 12px;
  line-height: 17px;
  font-style: normal;
`;
export default Header;
