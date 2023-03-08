"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var searchResultsPlaceholder_1 = __importDefault(require("./searchResultsPlaceholder"));
var sponsored_1 = __importDefault(require("./sponsored"));
var searchResults_1 = require("./searchResults");
var NoResultsFound = function (_a) {
    var query = _a.query, response = _a.response, theme = _a.theme;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(searchResults_1.ResultsHeader, null,
            react_1.default.createElement(searchResults_1.ResultsText, { style: { color: theme.text } },
                response && !response.results && (react_1.default.createElement("span", null,
                    "No results found for ",
                    query)),
                !response && react_1.default.createElement("span", null, " Enter a MPN to search")),
            react_1.default.createElement(sponsored_1.default, { theme: theme })),
        react_1.default.createElement(searchResultsPlaceholder_1.default, { theme: theme })));
};
exports.default = NoResultsFound;
