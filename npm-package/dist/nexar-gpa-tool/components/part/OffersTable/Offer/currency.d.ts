/// <reference types="react" />
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    offer: OfferType;
    theme: IncomingColors;
};
declare const Currency: ({ country, offer, theme }: Props) => JSX.Element;
export default Currency;
