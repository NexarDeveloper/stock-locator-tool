import React from "react";
import styled from "styled-components";
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";

type Props = {
  offer: OfferType;
  theme: IncomingColors;
};

const Pkg = ({ offer, theme }: Props) => {
  return (
    <StyledPkg style={{ color: theme.text }}>
      <PkgLabel>PACKAGING</PkgLabel>
      <PkgValue>{offer.packaging || "-"}</PkgValue>
    </StyledPkg>
  );
};

const StyledPkg = styled.div`
  font-size: 13px;
  padding: 6px;
  display: flex;
  justify-content: space-around;
`;

const PkgLabel = styled.div`
  font-size: 12px;
  line-height: 15px;
  margin-right: 8px;
`;

const PkgValue = styled.div`
  padding-right: 20px;
`;

export default Pkg;
