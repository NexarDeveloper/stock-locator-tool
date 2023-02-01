import { SupPartResult as Result } from "../../../modules/graphql/generated";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { deviceWidths } from "../../../lib";
import { IncomingColors, IncomingParams } from "../../../types";
import Mpn from "./Mpn";

type Props = {
  query: string;
  result: Result;
  searchParameters: IncomingParams;
  theme: IncomingColors;
};

const Header = ({ query, result, searchParameters, theme }: Props) => {
  return (
    <PartHeader
      style={{ backgroundColor: theme.partHeaderBackground ?? "inherit" }}
    >
      {searchParameters.enableManufacturerLink &&
        result.part.manufacturerUrl && (
          <a
            href={result.part.manufacturerUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Mpn query={query} result={result} theme={theme} />
          </a>
        )}
      {searchParameters.enableManufacturerLink &&
        !result.part.manufacturerUrl && (
          <Mpn query={query} result={result} theme={theme} />
        )}
      {!searchParameters.enableManufacturerLink && (
        <a
          href={`https://octopart.com${result.part.slug}`}
          rel="noreferrer"
          target="_blank"
        >
          <Mpn query={query} result={result} theme={theme} />
        </a>
      )}
      {result.akaMpn && (
        <PartAka>
          <span>Also known as </span>
          <Highlighter
            autoEscape={true}
            searchWords={[query]}
            textToHighlight={result.akaMpn}
          />
        </PartAka>
      )}
      {result.description && (
        <PartDescription style={{ color: theme.partHeaderText ?? theme.text }}>
          {result.part.descriptions[0].text}
        </PartDescription>
      )}
    </PartHeader>
  );
};

const PartHeader = styled.div`
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

const PartAka = styled.div`
  font-size: 12px;
  line-height: 17px;
  font-style: italic;
`;

const PartDescription = styled.div`
  font-size: 12px;
  line-height: 17px;
  font-style: normal;
`;

export default Header;
