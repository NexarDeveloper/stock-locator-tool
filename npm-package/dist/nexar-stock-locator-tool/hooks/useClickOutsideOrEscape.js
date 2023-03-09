"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useClickOutsideOrEscape = function () {
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var handleClick = function () {
        setIsOpen(!isOpen);
    };
    var handleKeyDown = function (event) {
        if (event.which === 13) {
            setIsOpen(!isOpen);
        }
    };
    var handleKeyDownOutside = function (event) {
        if (event.which === 27) {
            setIsOpen(false);
        }
    };
    var handleClickOutside = function (event) {
        if (ref === null || ref.current === null) {
            return;
        }
        if (event.composedPath().indexOf(ref.current) === -1) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(function () {
        if (isOpen) {
            if ("ontouchstart" in document.documentElement) {
                document.body.style.cursor = "pointer";
            }
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("keydown", handleKeyDownOutside);
        }
        return function () {
            if ("ontouchstart" in document.documentElement) {
                document.body.style.cursor = "auto";
            }
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDownOutside);
        };
    }, [ref.current, isOpen]);
    return { handleClick: handleClick, handleKeyDown: handleKeyDown, isOpen: isOpen, ref: ref };
};
exports.default = useClickOutsideOrEscape;
