import { useState } from "react";
import {
  SupPartResult as Result,
  SupPartSeller as SellerType,
} from "../../../../lib/graphql/generated";
import IsAuthorized from "./IsAuthorized";
import Seller from "./Seller";
import Sku from "./Sku";
import Stock from "./Stock";
import Moq from "./Moq";
import Cta from "./Cta";
import Currency from "./Currency";
import Price from "./Price";
import Updated from "./Updated";
import { IncomingColors, IncomingColumns } from "../../../../types";

type Props = {
  country: string;
  result: Result;
  seller: SellerType;
  sellerIndex: number;
  theme: IncomingColors;
  hideColumns?: IncomingColumns;
};

const Offer = ({
  country,
  result,
  seller,
  sellerIndex,
  theme,
  hideColumns,
}: Props) => {
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
              {!hideColumns?.isAuthorized && <IsAuthorized seller={seller} />}
              {!hideColumns?.distributor && (
                <Seller
                  country={country}
                  handleExpandClick={handleExpandClick}
                  offer={offer}
                  offerIndex={offerIndex}
                  seller={seller}
                  theme={theme}
                />
              )}
              {!hideColumns?.sku && <Sku offer={offer} theme={theme} />}
              {!hideColumns?.stock && (
                <Stock
                  country={country}
                  seller={seller}
                  offer={offer}
                  theme={theme}
                />
              )}
              {!hideColumns?.moq && (
                <Moq country={country} offer={offer} theme={theme} />
              )}
              {!hideColumns?.cta && (
                <Cta
                  offer={offer}
                  result={result}
                  seller={seller}
                  theme={theme}
                />
              )}
              {!hideColumns?.currency && (
                <Currency country={country} offer={offer} theme={theme} />
              )}
              {!hideColumns?.price1 && (
                <Price country={country} offer={offer} qty={1} theme={theme} />
              )}
              {!hideColumns?.price10 && (
                <Price country={country} offer={offer} qty={10} theme={theme} />
              )}
              {!hideColumns?.price100 && (
                <Price
                  country={country}
                  offer={offer}
                  qty={100}
                  theme={theme}
                />
              )}
              {!hideColumns?.price1000 && (
                <Price
                  country={country}
                  offer={offer}
                  qty={1000}
                  theme={theme}
                />
              )}
              {!hideColumns?.price10000 && (
                <Price
                  country={country}
                  offer={offer}
                  qty={10000}
                  theme={theme}
                />
              )}
              {!hideColumns?.updated && (
                <Updated offer={offer} seller={seller} theme={theme} />
              )}
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
