import { useState, useEffect } from "react";
import { getTimeAgo } from "../../../../lib";
import {
  SupPartSeller as SellerType,
  SupOffer as OfferType,
} from "../../../../lib/graphql/generated";
import styled from "styled-components";
import { IncomingColors } from "../../../../types";

type TimeAgo = {
  long: string | null;
  short: string | null;
};

type Props = {
  offer: OfferType;
  seller: SellerType;
  theme: IncomingColors;
};

const Updated = ({ offer, seller, theme }: Props) => {
  const [timeAgo, setTimeAgo] = useState<TimeAgo>({ long: null, short: null });
  if (!timeAgo.long && !timeAgo.short) {
    setTimeAgo(getTimeAgo(offer.updated));
  }
  useEffect(() => {
    let interval: number;
    if (!seller.company.isDistributorApi) {
      setTimeAgo(getTimeAgo(offer.updated));
    } else {
      setTimeAgo(getTimeAgo(offer.updated));
      interval = window.setInterval(() => {
        setTimeAgo(getTimeAgo(offer.updated));
      }, 3000);
    }
    return () => {
      window.clearInterval(interval);
    };
  }, [seller.company.isDistributorApi, offer.updated]);

  return (
    <StyledUpdated
      title={`Data updated ${timeAgo.long}`}
      style={{ color: theme.text }}
    >
      {timeAgo.short}
    </StyledUpdated>
  );
};

const StyledUpdated = styled.td`
  padding: 6px 6px 6px 40px;
  font-size: 13px;
  display: table-cell;
  vertical-align: middle;
`;

export default Updated;
