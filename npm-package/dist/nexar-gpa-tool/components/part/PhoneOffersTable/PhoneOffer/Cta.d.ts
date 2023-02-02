/// <reference types="react" />
import { SupPartResult as ResultType, SupPartSeller as SellerType, SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    offer: OfferType;
    seller: SellerType;
    result: ResultType;
    isExpanded: Boolean;
    theme: IncomingColors;
};
declare const Cta: ({ offer, seller, result, isExpanded, theme }: Props) => JSX.Element;
export default Cta;
