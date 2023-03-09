"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var react_1 = require("react");
var value = {
    expansions: {},
    handleExpanderClick: function (_id) { },
};
exports.Context = (0, react_1.createContext)(value);
var useExpansions = function (sellers, showAllInitially) {
    if (showAllInitially === void 0) { showAllInitially = false; }
    var initialExpansions = {};
    if (sellers.length > 0) {
        sellers.forEach(function (s) {
            if (s.offers.length > 1) {
                initialExpansions[s.company.id] = false;
            }
        });
    }
    var _a = (0, react_1.useState)(initialExpansions), expansions = _a[0], setExpansions = _a[1];
    var _b = (0, react_1.useState)(showAllInitially), isShowingAll = _b[0], setIsShowingAll = _b[1];
    var handleExpanderClick = function (id) {
        var _a;
        setExpansions(__assign(__assign({}, expansions), (_a = {}, _a[id] = !expansions[id], _a)));
    };
    var handleShowAllClick = function () {
        setIsShowingAll(true);
        var newExpansions = __assign({}, expansions);
        Object.keys(newExpansions).forEach(function (id) {
            newExpansions[id] = true;
        });
        setExpansions(newExpansions);
    };
    var handleShowFewerClick = function () {
        setIsShowingAll(false);
        var newExpansions = __assign({}, expansions);
        Object.keys(newExpansions).forEach(function (id) {
            newExpansions[id] = false;
        });
        setExpansions(newExpansions);
    };
    return {
        expansions: expansions,
        handleExpanderClick: handleExpanderClick,
        handleShowAllClick: handleShowAllClick,
        handleShowFewerClick: handleShowFewerClick,
        isShowingAll: isShowingAll,
    };
};
exports.default = useExpansions;
