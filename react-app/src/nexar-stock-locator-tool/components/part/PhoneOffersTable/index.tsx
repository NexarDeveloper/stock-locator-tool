import styled from "styled-components";
import PhoneOffer from "./PhoneOffer";
import {
  SupPartResult as ResultType,
  SupPartSeller as SellerType,
} from "../../../lib/graphql/generated";
import { IncomingColors } from "../../../types";

type Props = {
  country: string;
  currency: string;
  result: ResultType;
  sellers: SellerType[];
  theme: IncomingColors;
};

const PhoneOffersTable = ({
  country,
  currency,
  result,
  sellers,
  theme,
}: Props) => {
  return (
    <OffersTable
      style={{
        borderWidth: "1px 0px",
        borderStyle: "solid",
        borderColor: theme.tint,
      }}
    >
      {sellers.map((seller) => (
        <PhoneOffer
          country={country}
          currency={currency}
          result={result}
          seller={seller}
          key={seller.company.id}
          theme={theme}
        />
      ))}
    </OffersTable>
  );
};

const OffersTable = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }
`;

export default PhoneOffersTable;
