import { useEffect, useRef, useState } from "react";
const useClickOutsideOrEscape = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleKeyDown = (event) => {
        if (event.which === 13) {
            setIsOpen(!isOpen);
        }
    };
    const handleKeyDownOutside = (event) => {
        if (event.which === 27) {
            setIsOpen(false);
        }
    };
    const handleClickOutside = (event) => {
        if (ref === null || ref.current === null) {
            return;
        }
        if (event.composedPath().indexOf(ref.current) === -1) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            if ("ontouchstart" in document.documentElement) {
                document.body.style.cursor = "pointer";
            }
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("keydown", handleKeyDownOutside);
        }
        return () => {
            if ("ontouchstart" in document.documentElement) {
                document.body.style.cursor = "auto";
            }
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDownOutside);
        };
    }, [ref.current, isOpen]);
    return { handleClick, handleKeyDown, isOpen, ref };
};
export default useClickOutsideOrEscape;
