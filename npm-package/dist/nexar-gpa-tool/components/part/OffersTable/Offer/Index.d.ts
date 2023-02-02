/// <reference types="react" />
import { SupPartResult as Result, SupPartSeller as SellerType } from "../../../../modules/graphql/generated";
import { IncomingColors, IncomingColumns } from "../../../../types";
type Props = {
    country: string;
    result: Result;
    seller: SellerType;
    sellerIndex: number;
    theme: IncomingColors;
    hideColumns?: IncomingColumns;
};
declare const Offer: ({ country, result, seller, sellerIndex, theme, hideColumns, }: Props) => JSX.Element;
export default Offer;
