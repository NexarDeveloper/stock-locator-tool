/// <reference types="react" />
import { IncomingColors } from "../types";
type Props = {
    query: string;
    setQuery: (x: string) => void;
    country: string;
    setCountry: (x: string) => void;
    currency: string;
    setCurrency: (x: string) => void;
    handleFormSubmit: (a: string, b: string, c: string) => void;
    theme: IncomingColors;
};
declare const SearchForm: ({ query, setQuery, country, setCountry, currency, setCurrency, handleFormSubmit, theme, }: Props) => JSX.Element;
export default SearchForm;
