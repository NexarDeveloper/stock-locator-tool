import React from "react";
import styled from "styled-components";
const Pkg = ({ offer, theme }) => {
    return (React.createElement(StyledPkg, { style: { color: theme.text } },
        React.createElement(PkgLabel, null, "PACKAGING"),
        React.createElement(PkgValue, null, offer.packaging || "-")));
};
const StyledPkg = styled.div `
  font-size: 13px;
  padding: 6px;
  display: flex;
  justify-content: space-around;
`;
const PkgLabel = styled.div `
  font-size: 12px;
  line-height: 15px;
  margin-right: 8px;
`;
const PkgValue = styled.div `
  padding-right: 20px;
`;
export default Pkg;
