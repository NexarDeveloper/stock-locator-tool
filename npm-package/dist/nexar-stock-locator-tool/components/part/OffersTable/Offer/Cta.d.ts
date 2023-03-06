/// <reference types="react" />
import { SupPartResult as ResultType, SupPartSeller as SellerType, SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    offer: OfferType;
    seller: SellerType;
    result: ResultType;
    theme: IncomingColors;
};
declare const Cta: ({ offer, seller, result, theme }: Props) => JSX.Element;
export default Cta;
