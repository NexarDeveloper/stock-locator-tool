/// <reference types="react" />
import { SupPartResult as ResultType, SupPartSeller as SellerType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    currency: string;
    result: ResultType;
    seller: SellerType;
    theme: IncomingColors;
};
declare const PhoneOffer: ({ country, currency, result, seller, theme }: Props) => JSX.Element;
export default PhoneOffer;
