/// <reference types="react" />
import { SupPartSeller as SellerType } from "../modules/graphql/generated";
type Expansions = {
    [id: string]: boolean;
};
export type ContextValue = {
    expansions: Expansions;
    handleExpanderClick: (id: string) => void;
};
export declare const Context: import("react").Context<ContextValue>;
declare const useExpansions: (sellers: SellerType[], showAllInitially?: boolean) => {
    expansions: Expansions;
    handleExpanderClick: (id: string) => void;
    handleShowAllClick: () => void;
    handleShowFewerClick: () => void;
    isShowingAll: boolean;
};
export default useExpansions;
