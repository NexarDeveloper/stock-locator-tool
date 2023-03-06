/// <reference types="react" />
import { IncomingParams, IncomingStyles, IncomingColumns } from "../types";
type Props = {
    searchParameters: IncomingParams;
    styles?: IncomingStyles;
    hideColumns?: IncomingColumns;
};
export declare const StockLocatorTool: ({ searchParameters, styles, hideColumns, }: Props) => JSX.Element;
export {};
