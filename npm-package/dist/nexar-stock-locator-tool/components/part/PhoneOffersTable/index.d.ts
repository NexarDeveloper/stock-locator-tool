/// <reference types="react" />
import { SupPartResult as ResultType, SupPartSeller as SellerType } from "../../../modules/graphql/generated";
import { IncomingColors } from "../../../types";
type Props = {
    country: string;
    currency: string;
    result: ResultType;
    sellers: SellerType[];
    theme: IncomingColors;
};
declare const PhoneOffersTable: ({ country, currency, result, sellers, theme, }: Props) => JSX.Element;
export default PhoneOffersTable;
