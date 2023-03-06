/// <reference types="react" />
import { SupOffer as OfferType } from "../../../../../modules/graphql/generated";
type Props = {
    country: string;
    isTable?: boolean;
    offer: OfferType;
    qty: number;
};
declare const Price: ({ country, isTable, offer, qty }: Props) => JSX.Element | null;
export default Price;
