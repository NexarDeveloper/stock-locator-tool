"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runQuery = void 0;
var endpoint = "https://api.nexar.com/graphql/";
var runQuery = function (searchParameters) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(endpoint, {
                    method: "POST",
                    headers: {
                        authorization: "Bearer " + searchParameters.token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: "query mpnSearch(\n      $q: String\n      $country: String!\n      $currency: String!\n      $start: Int\n      $limit: Int\n      # $sort: string\n      $sortDir: SupSortDirection\n      $inStockOnly: Boolean\n      $filters: Map\n      $distributorApi: Boolean\n      $distributorApiTimeout: String!\n      # $customPricingCredentials: SupApiCredentials\n      $authorizedOnly: Boolean!\n    ) {\n      supSearchMpn(\n        q: $q\n        country: $country\n        currency: $currency\n        start: $start\n        limit: $limit\n        # sort: $sort\n        sortDir: $sortDir\n        inStockOnly: $inStockOnly\n        filters: $filters\n        distributorApi: $distributorApi\n        distributorApiTimeout: $distributorApiTimeout # customPricingCredentials: $customPricingCredentials\n      ) {\n        hits\n        appliedFilters {\n          shortname\n          name\n          values\n          displayValues\n        }\n        results {\n          _cacheId\n          akaMpn\n          description\n          part {\n            _cacheId\n            bestDatasheet {\n              url\n            }\n            bestImage {\n              url\n            }\n            category {\n              id\n            }\n            descriptions {\n              text\n            }\n            freeSampleUrl\n            id\n            manufacturer {\n              id\n              isVerified\n              name\n            }\n            manufacturerUrl\n            medianPrice1000 {\n              _cacheId\n              convertedCurrency\n              convertedPrice\n            }\n            mpn\n            sellers(authorizedOnly: $authorizedOnly) {\n              _cacheId\n              company {\n                homepageUrl\n                id\n                isDistributorApi\n                isVerified\n                name\n                slug\n              }\n              isAuthorized\n              isBroker\n              isRfq\n              offers {\n                _cacheId\n                clickUrl\n                id\n                inventoryLevel\n                moq\n                packaging\n                prices {\n                  _cacheId\n                  conversionRate\n                  convertedCurrency\n                  convertedPrice\n                  currency\n                  price\n                  quantity\n                }\n                sku\n                updated\n              }\n            }\n            series {\n              id\n              name\n              url\n            }\n            slug\n            v3uid\n          }\n        }\n      }\n    }",
                        variables: {
                            q: searchParameters.q,
                            country: searchParameters.country,
                            currency: searchParameters.currency,
                            distributorApiTimeout: "5s",
                            authorizedOnly: searchParameters.authorizedOnly
                                ? searchParameters.authorizedOnly
                                : false,
                            inStockOnly: searchParameters.inStockOnly
                                ? searchParameters.inStockOnly
                                : false,
                            limit: searchParameters.limit,
                        },
                    }),
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.runQuery = runQuery;
