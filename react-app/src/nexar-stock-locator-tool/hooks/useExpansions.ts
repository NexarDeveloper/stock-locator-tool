import { createContext, useState } from "react";
import { SupPartSeller as SellerType } from "../lib/graphql/generated";

type Expansions = {
  [id: string]: boolean;
};

export type ContextValue = {
  expansions: Expansions;
  handleExpanderClick: (id: string) => void;
};

const value: ContextValue = {
  expansions: {},
  handleExpanderClick: (_id: string) => {},
};

export const Context = createContext(value);

const useExpansions = (
  sellers: SellerType[],
  showAllInitially: boolean = false
) => {
  const initialExpansions: Expansions = {};
  if (sellers.length > 0) {
    sellers.forEach((s) => {
      if (s.offers.length > 1) {
        initialExpansions[s.company.id] = false;
      }
    });
  }
  const [expansions, setExpansions] = useState<Expansions>(initialExpansions);
  const [isShowingAll, setIsShowingAll] = useState<boolean>(showAllInitially);
  const handleExpanderClick = (id: string) => {
    setExpansions({
      ...expansions,
      [id]: !expansions[id],
    });
  };
  const handleShowAllClick = () => {
    setIsShowingAll(true);
    const newExpansions = {
      ...expansions,
    };
    Object.keys(newExpansions).forEach((id) => {
      newExpansions[id] = true;
    });
    setExpansions(newExpansions);
  };
  const handleShowFewerClick = () => {
    setIsShowingAll(false);
    const newExpansions = {
      ...expansions,
    };
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
