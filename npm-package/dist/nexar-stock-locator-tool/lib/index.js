"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeAgo = exports.getPriceAtQty = exports.getPricePointAtQty = exports.getPricePoints = exports.getStock = exports.getFormattedNumber = exports.getUrlSearchParams = exports.deviceWidths = void 0;
var types_1 = require("../types");
var date_fns_1 = require("date-fns");
exports.deviceWidths = {
    phone: "767px",
    tablet: "1124px",
};
var getUrlSearchParams = function (obj) {
    return Object.keys(obj)
        .reduce(function (urlSearchParams, key) {
        var value = obj[key];
        if (value !== undefined) {
            if (Array.isArray(value)) {
                value.forEach(function (v) {
                    urlSearchParams.append(key, v);
                });
            }
            else {
                urlSearchParams.append(key, value.toString());
            }
        }
        return urlSearchParams;
    }, new URLSearchParams())
        .toString();
};
exports.getUrlSearchParams = getUrlSearchParams;
var getFormattedNumber = function (number, country, fractionDigits) {
    return fractionDigits !== undefined
        ? number === null || number === void 0 ? void 0 : number.toLocaleString(country, {
            maximumFractionDigits: fractionDigits,
            minimumFractionDigits: fractionDigits,
        })
        : number === null || number === void 0 ? void 0 : number.toLocaleString(country);
};
exports.getFormattedNumber = getFormattedNumber;
var getStock = function (inventory_level, is_broker, country) {
    if (is_broker) {
        return "Contact";
    }
    switch (inventory_level) {
        case types_1.InventoryLevel.non_stocked:
            // -1
            return "n/s";
        case types_1.InventoryLevel.in_stock_but_not_reported:
            // -2
            return "Yes";
        case types_1.InventoryLevel.unknown:
            // -3
            return "Contact";
        case types_1.InventoryLevel.rfq:
            // -4
            return "RFQ";
        default:
            return (0, exports.getFormattedNumber)(inventory_level, country);
    }
};
exports.getStock = getStock;
var getPricePoints = function (pricePoints) {
    var nativePricePoints = pricePoints.filter(function (pp) { return pp.conversionRate === 1; });
    if (nativePricePoints.length > 0) {
        return nativePricePoints;
    }
    return pricePoints;
};
exports.getPricePoints = getPricePoints;
var getPricePointAtQty = function (pricePoints, qty) {
    var pricePoint;
    for (var i = pricePoints.length - 1; i >= 0; i -= 1) {
        if (pricePoints[i].quantity <= qty) {
            pricePoint = pricePoints[i];
            break;
        }
    }
    return pricePoint;
};
exports.getPricePointAtQty = getPricePointAtQty;
var getPriceAtQty = function (offer, qty, country, decimalPlaces) {
    var pricePoints = (0, exports.getPricePoints)(offer.prices);
    var pricePoint = (0, exports.getPricePointAtQty)(pricePoints, qty);
    var price = null;
    if (pricePoint) {
        var fractionDigits = 3;
        if (pricePoint.convertedPrice > 100) {
            fractionDigits = 2;
        }
        if (pricePoint.convertedPrice > 1000) {
            fractionDigits = 0;
        }
        fractionDigits = decimalPlaces ? decimalPlaces : fractionDigits;
        price = (0, exports.getFormattedNumber)(pricePoint.convertedPrice, country, fractionDigits);
    }
    return price;
};
exports.getPriceAtQty = getPriceAtQty;
var getTimeAgo = function (dateString) {
    var short = (0, date_fns_1.formatDistanceToNow)((0, date_fns_1.parseISO)(dateString), {
        includeSeconds: true,
    });
    short = short.replace(/^about\ /, "");
    var long = "".concat(short, " ago");
    if (short.indexOf("seconds") !== -1 ||
        short.indexOf("half a minute") !== -1 ||
        short.indexOf("less than a minute") !== -1) {
        short = "<1m";
        long = "a few seconds ago";
    }
    else if (short.indexOf("month") !== -1 || short.indexOf("year") !== -1) {
        short = ">1wk";
        long = "over a week ago";
    }
    else {
        short = short
            .replace(/ days?/, "d")
            .replace(/ hours?/, "h")
            .replace(/ minutes?/, "m")
            .replace(/^an?/, "1");
    }
    if (short.indexOf("d") !== -1) {
        var numericPartOfDtnShort = parseInt(short.replace(/d$/, ""), 10);
        if (numericPartOfDtnShort > 7) {
            short = ">1wk";
            long = "over a week ago";
        }
    }
    if (short === "24h") {
        short = "1d";
        long = "a day ago";
    }
    if (long === "1 day ago" || long === "1 minute ago") {
        long = long.replace("1", "a");
    }
    return {
        long: long,
        short: short,
    };
};
exports.getTimeAgo = getTimeAgo;
