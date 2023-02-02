import React from "react";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
const Mpn = ({ query, result, theme }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return (React.createElement(PartTitleContainer, { style: {
            color: (_b = (_a = theme.partHeaderMpn) !== null && _a !== void 0 ? _a : theme.partHeaderText) !== null && _b !== void 0 ? _b : theme.text,
            borderRight: `1px solid ${(_e = (_d = (_c = theme.highlight) !== null && _c !== void 0 ? _c : theme.partHeaderMpn) !== null && _d !== void 0 ? _d : theme.partHeaderText) !== null && _e !== void 0 ? _e : theme.text}`,
        } },
        React.createElement("div", null, result.part.manufacturer.name),
        React.createElement("div", { style: { color: (_f = theme.partHeaderMpn) !== null && _f !== void 0 ? _f : "inherit" } },
            React.createElement(Highlighter, { autoEscape: true, searchWords: [query], textToHighlight: result.part.mpn, highlightStyle: {
                    color: (_g = theme.highlight) !== null && _g !== void 0 ? _g : "inherit",
                    fontWeight: "bold",
                    backgroundColor: "inherit",
                } }))));
};
const PartTitleContainer = styled.div `
  display: inline-block;
  font-size: 18px;
  line-height: 25px;
  padding-right: 20px;
  margin-right: 20px;
`;
export default Mpn;
