/// <reference types="react" />
import { SupPartResult as ResultType, SupPartSeller as SellerType } from "../../../modules/graphql/generated";
import { IncomingColors, IncomingColumns } from "../../../types";
type Props = {
    currency: string;
    country: string;
    result: ResultType;
    sellers: SellerType[];
    theme: IncomingColors;
    hideColumns?: IncomingColumns;
};
declare const OffersTable: ({ currency, country, result, sellers, theme, hideColumns, }: Props) => JSX.Element;
export default OffersTable;
