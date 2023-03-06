/// <reference types="react" />
import { SupPartResultSet } from "../modules/graphql/generated";
import { IncomingColors } from "../types";
type Props = {
    query: string;
    response: SupPartResultSet | undefined;
    theme: IncomingColors;
};
declare const NoResultsFound: ({ query, response, theme }: Props) => JSX.Element;
export default NoResultsFound;
