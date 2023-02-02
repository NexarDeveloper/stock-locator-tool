import { useState } from "react";
const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const handleMouseOver = () => setIsHovered(true);
    if (typeof window !== "undefined" && window.innerWidth < 767) {
        return [false, handleMouseOut, handleMouseOver];
    }
    return [isHovered, handleMouseOut, handleMouseOver];
};
export default useHover;
