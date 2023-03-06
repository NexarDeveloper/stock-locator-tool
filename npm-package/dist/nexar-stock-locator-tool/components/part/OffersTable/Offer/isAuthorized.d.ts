/// <reference types="react" />
import { SupPartSeller as SellerType } from "../../../../modules/graphql/generated";
type Props = {
    seller: SellerType;
};
declare const IsAuthorized: ({ seller }: Props) => JSX.Element;
export default IsAuthorized;
