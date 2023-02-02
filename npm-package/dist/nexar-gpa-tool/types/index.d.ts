export type IncomingParams = {
    authorizedOnly?: boolean;
    country?: string;
    currency?: string;
    enableManufacturerLink?: boolean;
    expandOfferTable?: boolean;
    inStockOnly?: boolean;
    limit?: number;
    q?: string;
    token: string | undefined;
};
export type IncomingStyles = {
    font?: string;
    theme?: string;
    customColors?: IncomingColors;
};
export type IncomingColors = {
    background: string;
    tint: string;
    text: string;
    button: string;
    buttonSecondary: string;
    row1: string;
    row2: string;
    searchFormBackground?: string;
    highlight?: string;
    partHeaderBackground?: string;
    partHeaderMpn?: string;
    partHeaderText?: string;
    tableHeaderText?: string;
    keyText?: string;
};
export type IncomingColumns = {
    isAuthorized?: boolean;
    distributor?: boolean;
    sku?: boolean;
    stock?: boolean;
    moq?: boolean;
    cta?: boolean;
    currency?: boolean;
    price1?: boolean;
    price10?: boolean;
    price100?: boolean;
    price1000?: boolean;
    price10000?: boolean;
    updated?: boolean;
};
export declare enum InventoryLevel {
    non_stocked = -1,
    in_stock_but_not_reported = -2,
    unknown = -3,
    rfq = -4
}
