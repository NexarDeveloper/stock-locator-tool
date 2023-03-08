"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useHover = function () {
    var _a = (0, react_1.useState)(false), isHovered = _a[0], setIsHovered = _a[1];
    var handleMouseOut = function () {
        setIsHovered(false);
    };
    var handleMouseOver = function () { return setIsHovered(true); };
    if (typeof window !== "undefined" && window.innerWidth < 767) {
        return [false, handleMouseOut, handleMouseOver];
    }
    return [isHovered, handleMouseOut, handleMouseOver];
};
exports.default = useHover;
