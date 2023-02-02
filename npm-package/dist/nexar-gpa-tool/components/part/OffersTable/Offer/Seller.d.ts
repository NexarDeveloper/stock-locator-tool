/// <reference types="react" />
import { SupOffer as Offer, SupPartSeller as SellerType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    handleExpandClick: () => void;
    offer: Offer;
    offerIndex: number;
    seller: SellerType;
    theme: IncomingColors;
};
declare const Seller: ({ country, offer, seller, offerIndex, handleExpandClick, theme, }: Props) => JSX.Element;
export default Seller;
