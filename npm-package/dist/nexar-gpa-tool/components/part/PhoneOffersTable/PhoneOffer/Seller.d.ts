/// <reference types="react" />
import { SupPartSeller as SellerType, SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    offer: OfferType;
    seller: SellerType;
    theme: IncomingColors;
};
declare const Seller: ({ country, offer, seller, theme }: Props) => JSX.Element;
export default Seller;
