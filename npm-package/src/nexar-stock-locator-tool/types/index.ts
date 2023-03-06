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

export enum InventoryLevel {
  // -1: Non-stocked (seller is not currently stocking the product)
  non_stocked = -1,

  // -2: Yes (seller has the product in stock but has not reported the
  // quantity)
  in_stock_but_not_reported = -2,

  // -3: Unknown (seller has not indicated whether or not they have parts in
  // stock)
  unknown = -3,

  // -4: RFQ
  rfq = -4,
}
