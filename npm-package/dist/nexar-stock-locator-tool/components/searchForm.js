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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var country_list_1 = require("country-list");
var selectDropdown_1 = __importDefault(require("./selectDropdown"));
var styled_components_1 = __importDefault(require("styled-components"));
var lib_1 = require("../lib");
var magnifyingGlass_1 = __importDefault(require("./icons/magnifyingGlass"));
var react_1 = __importStar(require("react"));
var SearchForm = function (_a) {
    var _b;
    var query = _a.query, setQuery = _a.setQuery, country = _a.country, setCountry = _a.setCountry, currency = _a.currency, setCurrency = _a.setCurrency, handleFormSubmit = _a.handleFormSubmit, theme = _a.theme;
    var countries = __spreadArray([], __spreadArray([], (0, country_list_1.getData)(), true).sort(function (a, b) {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    }), true);
    var _c = (0, react_1.useState)([]), currencies = _c[0], setCurrencies = _c[1];
    (0, react_1.useEffect)(function () {
        var loadCurrencies = function () { return __awaiter(void 0, void 0, void 0, function () {
            var url, response, data, objectData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://openexchangerates.org/api/currencies.json";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = (_a.sent());
                        objectData = Object.entries(data).map(function (_a) {
                            var code = _a[0], name = _a[1];
                            return { code: code, name: name };
                        });
                        setCurrencies(objectData);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        loadCurrencies();
    }, [setCurrencies]);
    var handleSubmit = function (e) {
        if (query && country && currency) {
            handleFormSubmit(query, country, currency);
        }
        if (e !== undefined) {
            e.preventDefault();
        }
    };
    (0, react_1.useEffect)(function () {
        handleSubmit();
    }, [country, currency]);
    return (react_1.default.createElement(SearchContainer, { onSubmit: handleSubmit, style: {
            backgroundColor: (_b = theme.searchFormBackground) !== null && _b !== void 0 ? _b : theme.background,
            borderRadius: "10px",
        } },
        react_1.default.createElement(InputContainer, { style: {
                border: "1px solid ".concat(theme.tint),
                backgroundColor: "white",
            } },
            react_1.default.createElement(StyledInput, { name: "query", placeholder: "Search MPN", value: query, onChange: function (e) { return setQuery(e.target.value); }, style: {
                    color: "black",
                } }),
            react_1.default.createElement(SearchButton, { type: "submit", style: {
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                } },
                react_1.default.createElement(magnifyingGlass_1.default, null))),
        react_1.default.createElement(selectDropdown_1.default, { name: "country", onClick: setCountry, options: countries.map(function (c) { return ({
                value: c.code,
                text: c.name,
            }); }), value: country, theme: theme }),
        react_1.default.createElement(selectDropdown_1.default, { name: "currency", onClick: setCurrency, options: currencies.map(function (c) { return ({
                value: c.code,
                text: c.name,
            }); }), value: currency, theme: theme })));
};
var SearchContainer = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px 30px;\n  align-items: center;\n\n  @media (max-width: ", ") {\n    flex-wrap: wrap;\n    padding: 15px;\n  }\n  @media (max-width: \"500px\") {\n    flex-direction: column;\n  }\n\n  > * {\n    margin-right: 8px;\n  }\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px 30px;\n  align-items: center;\n\n  @media (max-width: ", ") {\n    flex-wrap: wrap;\n    padding: 15px;\n  }\n  @media (max-width: \"500px\") {\n    flex-direction: column;\n  }\n\n  > * {\n    margin-right: 8px;\n  }\n"])), lib_1.deviceWidths.phone);
var InputContainer = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 280px;\n  height: 35px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 0 4px;\n  @media (max-width: ", ") {\n    width: 100%;\n    margin-bottom: 4px;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 280px;\n  height: 35px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 0 4px;\n  @media (max-width: ", ") {\n    width: 100%;\n    margin-bottom: 4px;\n  }\n"])), lib_1.deviceWidths.phone);
var StyledInput = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  font-family: inherit;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n  &:focus {\n    outline: 0px;\n  }\n"], ["\n  width: 100%;\n  font-family: inherit;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n  &:focus {\n    outline: 0px;\n  }\n"])));
var SearchButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 20px;\n  border-radius: 2px;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n\n  svg {\n    width: 15px;\n    height: 15px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 20px;\n  border-radius: 2px;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n\n  svg {\n    width: 15px;\n    height: 15px;\n  }\n"])));
exports.default = SearchForm;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
