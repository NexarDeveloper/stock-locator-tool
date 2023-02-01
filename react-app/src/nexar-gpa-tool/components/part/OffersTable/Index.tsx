import {
  SupPartResult as ResultType,
  SupPartSeller as SellerType,
} from "../../../modules/graphql/generated";
import styled from "styled-components";

import Offer from "./Offer/Index";
import { IncomingColors } from "../../../types";

type Props = {
  currency: string;
  country: string;
  result: ResultType;
  sellers: SellerType[];
  theme: IncomingColors;
};

const OffersTable = ({ currency, country, result, sellers, theme }: Props) => {
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
            <th style={{ width: "22px", color: theme.tableHeaderText }}></th>
            <th style={{ width: "18.1%", color: theme.tableHeaderText }}>
              Distributor
            </th>
            <th style={{ width: "11.4%", color: theme.tableHeaderText }}>
              SKU
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              Stock
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              MOQ
            </th>
            <th />
            <th
              style={{
                textAlign: "center",
                color: theme.tableHeaderText,
                width: "6.4%",
              }}
            >
              {currency}
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              1
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              10
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              100
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              1000
            </th>
            <th style={{ textAlign: "right", color: theme.tableHeaderText }}>
              10000
            </th>
            <th
              style={{
                paddingLeft: "40px",
                width: "60px",
                color: theme.tableHeaderText,
              }}
            >
              Updated
            </th>
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
