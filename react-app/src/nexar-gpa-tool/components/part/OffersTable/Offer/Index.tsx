import { useState } from "react";
import {
  SupPartResult as Result,
  SupPartSeller as SellerType,
} from "../../../../modules/graphql/generated";
import IsAuthorized from "./isAuthorized";
import Seller from "./Seller";
import Sku from "./Sku";
import Stock from "./Stock";
import Moq from "./Moq";
import Cta from "./Cta";
import Currency from "./currency";
import Price from "./Price";
import Updated from "./Updated";
import { IncomingColors } from "../../../../types";

type Props = {
  country: string;
  result: Result;
  seller: SellerType;
  sellerIndex: number;
  theme: IncomingColors;
};

const Offer = ({ country, result, seller, sellerIndex, theme }: Props) => {
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {seller.offers.map((offer, offerIndex: number) => {
        if (isExpanded || offerIndex === 0) {
          return (
            <tr
              key={offer.id}
              style={
                sellerIndex % 2 === 0
                  ? { backgroundColor: theme.row1 }
                  : { backgroundColor: theme.row2 }
              }
            >
              <IsAuthorized seller={seller} />
              <Seller
                country={country}
                handleExpandClick={handleExpandClick}
                offer={offer}
                offerIndex={offerIndex}
                seller={seller}
                theme={theme}
              />
              <Sku offer={offer} theme={theme} />
              <Stock
                country={country}
                seller={seller}
                offer={offer}
                theme={theme}
              />
              <Moq country={country} offer={offer} theme={theme} />
              <Cta
                offer={offer}
                result={result}
                seller={seller}
                theme={theme}
              />
              <Currency country={country} offer={offer} theme={theme} />
              <Price country={country} offer={offer} qty={1} theme={theme} />
              <Price country={country} offer={offer} qty={10} theme={theme} />
              <Price country={country} offer={offer} qty={100} theme={theme} />
              <Price country={country} offer={offer} qty={1000} theme={theme} />
              <Price
                country={country}
                offer={offer}
                qty={10000}
                theme={theme}
              />
              <Updated offer={offer} seller={seller} theme={theme} />
            </tr>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Offer;
