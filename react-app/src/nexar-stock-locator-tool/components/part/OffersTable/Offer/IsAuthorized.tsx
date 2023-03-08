import React from "react";
import styled from "styled-components";
import Star from "../../../icons/Star";
import EmptyStar from "../../../icons/EmptyStar";
import { SupPartSeller as SellerType } from "../../../../modules/graphql/generated";

type Props = {
  seller: SellerType;
};

const IsAuthorized = ({ seller }: Props) => {
  const title =
    seller.isAuthorized && !seller.isBroker
      ? "Authorized Distributor"
      : "Non-Authorized Stocking Distributor";
  return (
    <StarContainer>
      <a href="https://octopart.com/authorized" tabIndex={-1} title={title}>
        <StarIcon>
          {seller.isAuthorized && !seller.isBroker && <Star />}
          {!seller.isAuthorized && !seller.isBroker && <EmptyStar />}
        </StarIcon>
      </a>
    </StarContainer>
  );
};

const StarContainer = styled.td`
  position: relative;
`;

const StarIcon = styled.span`
  svg {
    display: block;
    height: 20px;
    margin: auto;
    width: 9px;
  }
`;

export default IsAuthorized;
