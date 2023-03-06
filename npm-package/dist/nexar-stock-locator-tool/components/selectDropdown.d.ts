/// <reference types="react" />
import { IncomingColors } from "../types";
type Option = {
    text: string;
    value: string;
};
type DropdownProps = {
    name: string;
    onClick: (value: string) => void;
    options: Option[];
    value: string;
    theme: IncomingColors;
};
export declare const SelectDropdown: ({ name, onClick, options, value, theme, }: DropdownProps) => JSX.Element;
export default SelectDropdown;
