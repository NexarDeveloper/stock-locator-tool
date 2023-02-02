import { InventoryLevel } from "../types";
import { SupPricePoint as OfferPriceType } from "../modules/graphql/generated";
import { SupOffer as OfferType } from "../modules/graphql/generated";
import { formatDistanceToNow, parseISO } from "date-fns";

export const deviceWidths = {
  phone: "767px",
  tablet: "1124px",
};

type PotentialURLSearchParams = {
  [index: string]: boolean | number | string | string[] | undefined;
};

export const getUrlSearchParams = (obj: PotentialURLSearchParams): string =>
  Object.keys(obj)
    .reduce((urlSearchParams, key) => {
      const value = obj[key];
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => {
            urlSearchParams.append(key, v);
          });
        } else {
          urlSearchParams.append(key, value.toString());
        }
      }
      return urlSearchParams;
    }, new URLSearchParams())
    .toString();

export const getFormattedNumber = (
  number: number,
  country: string,
  fractionDigits?: number
) =>
  fractionDigits !== undefined
    ? number?.toLocaleString(country, {
        maximumFractionDigits: fractionDigits,
        minimumFractionDigits: fractionDigits,
      })
    : number?.toLocaleString(country);

export const getStock = (
  inventory_level: number,
  is_broker: boolean,
  country: string
): string => {
  if (is_broker) {
    return "Contact";
  }
  switch (inventory_level) {
    case InventoryLevel.non_stocked:
      // -1
      return "n/s";
    case InventoryLevel.in_stock_but_not_reported:
      // -2
      return "Yes";
    case InventoryLevel.unknown:
      // -3
      return "Contact";
    case InventoryLevel.rfq:
      // -4
      return "RFQ";
    default:
      return getFormattedNumber(inventory_level, country);
  }
};

export const getPricePoints = (pricePoints: OfferPriceType[]) => {
  const nativePricePoints = pricePoints.filter((pp) => pp.conversionRate === 1);
  if (nativePricePoints.length > 0) {
    return nativePricePoints;
  }
  return pricePoints;
};

export const getPricePointAtQty = (
  pricePoints: OfferPriceType[],
  qty: number
) => {
  let pricePoint;
  for (let i = pricePoints.length - 1; i >= 0; i -= 1) {
    if (pricePoints[i].quantity <= qty) {
      pricePoint = pricePoints[i];
      break;
    }
  }
  return pricePoint;
};

export const getPriceAtQty = (
  offer: OfferType,
  qty: number,
  country: string,
  decimalPlaces?: number
) => {
  const pricePoints = getPricePoints(offer.prices);
  const pricePoint = getPricePointAtQty(pricePoints, qty);
  let price = null;
  if (pricePoint) {
    let fractionDigits = 3;
    if (pricePoint.convertedPrice > 100) {
      fractionDigits = 2;
    }
    if (pricePoint.convertedPrice > 1000) {
      fractionDigits = 0;
    }
    fractionDigits = decimalPlaces ? decimalPlaces : fractionDigits;
    price = getFormattedNumber(
      pricePoint.convertedPrice,
      country,
      fractionDigits
    );
  }
  return price;
};

export const getTimeAgo = (dateString: string) => {
  let short = formatDistanceToNow(parseISO(dateString), {
    includeSeconds: true,
  });
  short = short.replace(/^about\ /, "");
  let long = `${short} ago`;
  if (
    short.indexOf("seconds") !== -1 ||
    short.indexOf("half a minute") !== -1 ||
    short.indexOf("less than a minute") !== -1
  ) {
    short = "<1m";
    long = "a few seconds ago";
  } else if (short.indexOf("month") !== -1 || short.indexOf("year") !== -1) {
    short = ">1wk";
    long = "over a week ago";
  } else {
    short = short
      .replace(/ days?/, "d")
      .replace(/ hours?/, "h")
      .replace(/ minutes?/, "m")
      .replace(/^an?/, "1");
  }
  if (short.indexOf("d") !== -1) {
    const numericPartOfDtnShort = parseInt(short.replace(/d$/, ""), 10);
    if (numericPartOfDtnShort > 7) {
      short = ">1wk";
      long = "over a week ago";
    }
  }
  if (short === "24h") {
    short = "1d";
    long = "a day ago";
  }
  if (long === "1 day ago" || long === "1 minute ago") {
    long = long.replace("1", "a");
  }
  return {
    long,
    short,
  };
};
