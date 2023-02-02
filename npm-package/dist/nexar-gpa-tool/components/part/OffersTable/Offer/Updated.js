import React from "react";
import { useState, useEffect } from "react";
import { getTimeAgo } from "../../../../lib";
import styled from "styled-components";
const Updated = ({ offer, seller, theme }) => {
    const [timeAgo, setTimeAgo] = useState({ long: null, short: null });
    if (!timeAgo.long && !timeAgo.short) {
        setTimeAgo(getTimeAgo(offer.updated));
    }
    useEffect(() => {
        let interval;
        if (!seller.company.isDistributorApi) {
            setTimeAgo(getTimeAgo(offer.updated));
        }
        else {
            setTimeAgo(getTimeAgo(offer.updated));
            interval = window.setInterval(() => {
                setTimeAgo(getTimeAgo(offer.updated));
            }, 3000);
        }
        return () => {
            window.clearInterval(interval);
        };
    }, [seller.company.isDistributorApi, offer.updated]);
    return (React.createElement(StyledUpdated, { title: `Data updated ${timeAgo.long}`, style: { color: theme.text } }, timeAgo.short));
};
const StyledUpdated = styled.td `
  padding: 6px 6px 6px 40px;
  font-size: 13px;
  display: table-cell;
  vertical-align: middle;
`;
export default Updated;
