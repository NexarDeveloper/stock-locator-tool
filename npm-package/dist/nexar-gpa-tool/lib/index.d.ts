import { SupPricePoint as OfferPriceType } from "../modules/graphql/generated";
import { SupOffer as OfferType } from "../modules/graphql/generated";
export declare const deviceWidths: {
    phone: string;
    tablet: string;
};
type PotentialURLSearchParams = {
    [index: string]: boolean | number | string | string[] | undefined;
};
export declare const getUrlSearchParams: (obj: PotentialURLSearchParams) => string;
export declare const getFormattedNumber: (number: number, country: string, fractionDigits?: number) => string;
export declare const getStock: (inventory_level: number, is_broker: boolean, country: string) => string;
export declare const getPricePoints: (pricePoints: OfferPriceType[]) => OfferPriceType[];
export declare const getPricePointAtQty: (pricePoints: OfferPriceType[], qty: number) => OfferPriceType | undefined;
export declare const getPriceAtQty: (offer: OfferType, qty: number, country: string, decimalPlaces?: number) => string | null;
export declare const getTimeAgo: (dateString: string) => {
    long: string;
    short: string;
};
export {};
