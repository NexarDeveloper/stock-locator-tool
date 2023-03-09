"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockLocatorTool = void 0;
var react_1 = __importStar(require("react"));
var nexarQuery_1 = require("../nexarQuery");
var searchForm_1 = __importDefault(require("./searchForm"));
var searchResults_1 = __importDefault(require("./searchResults"));
var styled_components_1 = __importDefault(require("styled-components"));
var NoResultsFound_1 = __importDefault(require("./NoResultsFound"));
var webfontloader_1 = __importDefault(require("webfontloader"));
var Footer_1 = __importDefault(require("./Footer"));
var lightTheme = {
    background: "#FFFFFF",
    button: "#3671B0",
    buttonSecondary: "#FFFFFF",
    keyText: "#2E654D",
    searchFormBackground: "#F4F2F1",
    partHeaderMpn: "#3671B0",
    partHeaderText: "#2A241F",
    row1: "#F4F2F1",
    row2: "#FFFFFF",
    tableHeaderText: "#080706",
    text: "#2A241F",
    tint: "#E3DFDA",
};
var darkTheme = {
    background: "#05153E",
    button: "#0071E3",
    buttonSecondary: "#FFFFFF",
    highlight: "#FFD600",
    keyText: "#4FCCD0",
    partHeaderMpn: "#F2F3F5",
    partHeaderText: "#CCD0D9",
    row1: "#4E5973",
    row2: "#323E57",
    tableHeaderText: "#FFFFFF",
    text: "#F2F3F5",
    tint: "#9098AC",
};
var StockLocatorTool = function (_a) {
    var _b;
    var searchParameters = _a.searchParameters, styles = _a.styles, hideColumns = _a.hideColumns;
    var theme = (_b = styles === null || styles === void 0 ? void 0 : styles.customColors) !== null && _b !== void 0 ? _b : ((styles === null || styles === void 0 ? void 0 : styles.theme) === "dark" ? darkTheme : lightTheme);
    var _c = (0, react_1.useState)(searchParameters.q || ""), query = _c[0], setQuery = _c[1];
    var _d = (0, react_1.useState)(""), lastSearch = _d[0], setLastSearch = _d[1];
    var _e = (0, react_1.useState)(), response = _e[0], setResponse = _e[1];
    var _f = (0, react_1.useState)(searchParameters.country || "US"), country = _f[0], setCountry = _f[1];
    var _g = (0, react_1.useState)(searchParameters.currency || "USD"), currency = _g[0], setCurrency = _g[1];
    var handleFormSubmit = function (query, country, currency) { return __awaiter(void 0, void 0, void 0, function () {
        var response_1, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchParameters.q = query;
                    searchParameters.country = country;
                    searchParameters.currency = currency;
                    setLastSearch(query);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, (0, nexarQuery_1.runQuery)(searchParameters)];
                case 2:
                    response_1 = _a.sent();
                    if (!response_1.ok) {
                        throw new Error(response_1.statusText);
                    }
                    return [4 /*yield*/, response_1.json()];
                case 3:
                    data = _a.sent();
                    setResponse(data.data.supSearchMpn);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var hasResults = response && response.results;
    var _h = (0, react_1.useState)(""), font = _h[0], setFont = _h[1];
    (0, react_1.useEffect)(function () {
        var wantedFont = (styles === null || styles === void 0 ? void 0 : styles.font) || "Inter";
        webfontloader_1.default.load({
            google: {
                families: [wantedFont],
            },
        });
        setFont(wantedFont);
    }, [styles === null || styles === void 0 ? void 0 : styles.font]);
    return (react_1.default.createElement(StyledStockLocatorTool, { style: { fontFamily: "".concat(font), backgroundColor: "".concat(theme.background) } },
        react_1.default.createElement(searchForm_1.default, { query: query, setQuery: setQuery, country: country, setCountry: setCountry, currency: currency, setCurrency: setCurrency, handleFormSubmit: handleFormSubmit, theme: theme }),
        hasResults && (react_1.default.createElement(searchResults_1.default, { country: country, currency: currency, query: lastSearch, data: response, searchParameters: searchParameters, theme: theme, hideColumns: hideColumns })),
        !hasResults && (react_1.default.createElement(NoResultsFound_1.default, { query: lastSearch, response: response, theme: theme })),
        react_1.default.createElement(Footer_1.default, { theme: theme })));
};
exports.StockLocatorTool = StockLocatorTool;
var StyledStockLocatorTool = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 5px;\n"], ["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 5px;\n"])));
var templateObject_1;
