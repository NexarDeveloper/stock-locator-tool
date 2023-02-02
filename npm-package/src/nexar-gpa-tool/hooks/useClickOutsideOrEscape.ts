import { RefObject, useEffect, useRef, useState } from "react";

const useClickOutsideOrEscape = <T extends HTMLElement>(): {
  handleClick: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  isOpen: boolean;
  ref: RefObject<T>;
} => {
  const ref = useRef<T>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.which === 13) {
      setIsOpen(!isOpen);
    }
  };
  const handleKeyDownOutside = (event: KeyboardEvent) => {
    if (event.which === 27) {
      setIsOpen(false);
    }
  };
  const handleClickOutside = (event: Event) => {
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
