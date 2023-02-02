export var InventoryLevel;
(function (InventoryLevel) {
    // -1: Non-stocked (seller is not currently stocking the product)
    InventoryLevel[InventoryLevel["non_stocked"] = -1] = "non_stocked";
    // -2: Yes (seller has the product in stock but has not reported the
    // quantity)
    InventoryLevel[InventoryLevel["in_stock_but_not_reported"] = -2] = "in_stock_but_not_reported";
    // -3: Unknown (seller has not indicated whether or not they have parts in
    // stock)
    InventoryLevel[InventoryLevel["unknown"] = -3] = "unknown";
    // -4: RFQ
    InventoryLevel[InventoryLevel["rfq"] = -4] = "rfq";
})(InventoryLevel || (InventoryLevel = {}));
