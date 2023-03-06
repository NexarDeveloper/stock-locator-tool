import { RefObject } from "react";
declare const useClickOutsideOrEscape: <T extends HTMLElement>() => {
    handleClick: () => void;
    handleKeyDown: (event: React.KeyboardEvent) => void;
    isOpen: boolean;
    ref: RefObject<T>;
};
export default useClickOutsideOrEscape;
