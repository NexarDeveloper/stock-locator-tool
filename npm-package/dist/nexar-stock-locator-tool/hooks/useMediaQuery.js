"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useMediaQuery = function () {
    var _a = (0, react_1.useState)(window.innerWidth), width = _a[0], setWidth = _a[1];
    var handleWindowSizeChange = function () {
        setWidth(window.innerWidth);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('resize', handleWindowSizeChange);
        return function () {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    return {
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1124,
    };
};
exports.default = useMediaQuery;
