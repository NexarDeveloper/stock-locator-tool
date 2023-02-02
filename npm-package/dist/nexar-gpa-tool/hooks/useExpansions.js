import { createContext, useState } from "react";
const value = {
    expansions: {},
    handleExpanderClick: (_id) => { },
};
export const Context = createContext(value);
const useExpansions = (sellers, showAllInitially = false) => {
    const initialExpansions = {};
    if (sellers.length > 0) {
        sellers.forEach((s) => {
            if (s.offers.length > 1) {
                initialExpansions[s.company.id] = false;
            }
        });
    }
    const [expansions, setExpansions] = useState(initialExpansions);
    const [isShowingAll, setIsShowingAll] = useState(showAllInitially);
    const handleExpanderClick = (id) => {
        setExpansions(Object.assign(Object.assign({}, expansions), { [id]: !expansions[id] }));
    };
    const handleShowAllClick = () => {
        setIsShowingAll(true);
        const newExpansions = Object.assign({}, expansions);
        Object.keys(newExpansions).forEach((id) => {
            newExpansions[id] = true;
        });
        setExpansions(newExpansions);
    };
    const handleShowFewerClick = () => {
        setIsShowingAll(false);
        const newExpansions = Object.assign({}, expansions);
        Object.keys(newExpansions).forEach((id) => {
            newExpansions[id] = false;
        });
        setExpansions(newExpansions);
    };
    return {
        expansions,
        handleExpanderClick,
        handleShowAllClick,
        handleShowFewerClick,
        isShowingAll,
    };
};
export default useExpansions;
