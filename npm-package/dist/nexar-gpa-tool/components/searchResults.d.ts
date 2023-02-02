/// <reference types="react" />
import { SupPartResultSet } from "../modules/graphql/generated";
import { IncomingColors, IncomingColumns, IncomingParams } from "../types";
type ResultsProps = {
    currency: string;
    country: string;
    query: string;
    data: SupPartResultSet | undefined;
    searchParameters: IncomingParams;
    theme: IncomingColors;
    hideColumns?: IncomingColumns;
};
declare const SearchResults: ({ currency, country, query, data, searchParameters, theme, hideColumns, }: ResultsProps) => JSX.Element;
export declare const ResultsHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ResultsText: import("styled-components").StyledComponent<"div", any, {}, never>;
export default SearchResults;
