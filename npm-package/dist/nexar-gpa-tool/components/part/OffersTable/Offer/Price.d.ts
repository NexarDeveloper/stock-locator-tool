/// <reference types="react" />
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    offer: OfferType;
    qty: number;
    theme: IncomingColors;
};
declare const Price: ({ country, offer, qty, theme }: Props) => JSX.Element;
export default Price;
