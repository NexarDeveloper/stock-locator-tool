import React from "react";
import styled from "styled-components";
import EmptyStar from "../../../icons/EmptyStar";
import Star from "../../../icons/Star";
import { SupPartSeller as SellerType } from "../../../../modules/graphql/generated";

type Props = {
  seller: SellerType;
};

const IsAuthorized = ({ seller }: Props) => {
  return (
    <StarIcon>
      {seller.isAuthorized && !seller.isBroker && <Star />}
      {!seller.isAuthorized && !seller.isBroker && <EmptyStar />}
    </StarIcon>
  );
};

const StarIcon = styled.span`
  display: flex;
  align-content: center;
  height: 100%;
  svg {
    display: block;
    height: 20px;
    margin: auto;
    width: 9px;
  }
`;

export default IsAuthorized;
