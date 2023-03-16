import React from "react";
import {
  SupPartResult as ResultType,
  SupPartSeller as SellerType,
} from "../../../modules/graphql/generated";
import styled from "styled-components";

import Offer from "./Offer";
import { IncomingColors, IncomingColumns } from "../../../types";

type Props = {
  currency: string;
  country: string;
  result: ResultType;
  sellers: SellerType[];
  theme: IncomingColors;
  hideColumns?: IncomingColumns;
};

const OffersTable = ({
  currency,
  country,
  result,
  sellers,
  theme,
  hideColumns,
}: Props) => {
  return (
    <StyledOffersTable
      style={{
        borderWidth: "1px 0px",
        borderStyle: "solid",
        borderColor: theme.tint,
      }}
    >
      <table style={{ color: theme.text }}>
        <thead>
          <tr>
            {!hideColumns?.isAuthorized && (
              <th style={{ width: "22px", color: theme.tableHeaderText }}></th>
            )}
            {!hideColumns?.distributor && (
              <th style={{ width: "18.1%", color: theme.tableHeaderText }}>
                Distributor
              </th>
            )}
            {!hideColumns?.sku && (
              <th style={{ width: "11.4%", color: theme.tableHeaderText }}>
                SKU
              </th>
            )}
            {!hideColumns?.stock && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                Stock
              </th>
            )}
            {!hideColumns?.moq && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                MOQ
              </th>
            )}
            {!hideColumns?.cta && <th />}
            {!hideColumns?.currency && (
              <th
                style={{
                  textAlign: "center",
                  color: theme.tableHeaderText,
                  width: "6.4%",
                }}
              >
                {currency}
              </th>
            )}
            {!hideColumns?.price1 && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                1
              </th>
            )}
            {!hideColumns?.price10 && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                10
              </th>
            )}
            {!hideColumns?.price100 && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                100
              </th>
            )}
            {!hideColumns?.price1000 && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                1000
              </th>
            )}
            {!hideColumns?.price10000 && (
              <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
                10000
              </th>
            )}
            {!hideColumns?.updated && (
              <th
                style={{
                  textAlign: "right",
                  color: theme.tableHeaderText,
                }}
              >
                Updated
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller, sellerIndex: number) => (
            <Offer
              country={country}
              key={seller.company.id}
              result={result}
              seller={seller}
              sellerIndex={sellerIndex}
              theme={theme}
              hideColumns={hideColumns}
            />
          ))}
        </tbody>
      </table>
    </StyledOffersTable>
  );
};

const StyledOffersTable = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }

  th {
    padding: 4px 6px;
    text-align: left;
    font-size: 13px;
    text-transform: uppercase;
  }
`;

export default OffersTable;
