import React from "react";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { SupPartResult as ResultType } from "../../../modules/graphql/generated";
import { IncomingColors } from "../../../types";

type Props = {
  query: string;
  result: ResultType;
  theme: IncomingColors;
};

const Mpn = ({ query, result, theme }: Props) => {
  return (
    <PartTitleContainer
      style={{
        color: theme.partHeaderMpn ?? theme.partHeaderText ?? theme.text,
        borderRight: `1px solid ${
          theme.highlight ??
          theme.partHeaderMpn ??
          theme.partHeaderText ??
          theme.text
        }`,
      }}
    >
      <div>{result.part.manufacturer.name}</div>
      <div style={{ color: theme.partHeaderMpn ?? "inherit" }}>
        <Highlighter
          autoEscape={true}
          searchWords={[query]}
          textToHighlight={result.part.mpn}
          highlightStyle={{
            color: theme.highlight ?? "inherit",
            fontWeight: "bold",
            backgroundColor: "inherit",
          }}
        />
      </div>
    </PartTitleContainer>
  );
};

const PartTitleContainer = styled.div`
  display: inline-block;
  font-size: 18px;
  line-height: 25px;
  padding-right: 20px;
  margin-right: 20px;
`;

export default Mpn;
