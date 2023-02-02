/// <reference types="react" />
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    offer: OfferType;
    theme: IncomingColors;
};
declare const Pkg: ({ offer, theme }: Props) => JSX.Element;
export default Pkg;
