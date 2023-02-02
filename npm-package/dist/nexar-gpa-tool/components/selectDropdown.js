import React from "react";
import useClickOutsideOrEscape from "../hooks/useClickOutsideOrEscape";
import styled from "styled-components";
import { deviceWidths } from "../lib";
import TriangleUp from "./icons/triangleUp";
import TriangleDown from "./icons/triangleDown";
export const SelectDropdown = ({ name, onClick, options, value, theme, }) => {
    var _a;
    const { handleClick, isOpen, ref } = useClickOutsideOrEscape();
    const handleOptionClick = (value) => {
        onClick(value);
        handleClick();
    };
    const displayText = name !== "country" ? value : (_a = options.find((o) => o.value === value)) === null || _a === void 0 ? void 0 : _a.text;
    return (React.createElement(React.Fragment, null,
        React.createElement(DropdownContainer, { ref: ref },
            name === "country" && (React.createElement(React.Fragment, null,
                React.createElement(CountryDropdownTitle, { onClick: handleClick, tabIndex: 0, type: "button", style: {
                        border: `1px solid ${theme.tint}`,
                    } },
                    React.createElement(React.Fragment, null, displayText),
                    isOpen ? React.createElement(TriangleUp, null) : React.createElement(TriangleDown, null)),
                React.createElement(CountryDropdownOptions, null, isOpen &&
                    options.map((option) => (React.createElement("li", { key: option.value }, value === option.value ? (React.createElement(DropdownOption, null,
                        React.createElement(OptionText, null, option.text))) : (React.createElement(DropdownOption, { onClick: () => handleOptionClick(option.value), type: "button" },
                        React.createElement(OptionText, null, option.text))))))))),
            name !== "country" && (React.createElement(React.Fragment, null,
                React.createElement(DropdownTitle, { onClick: handleClick, tabIndex: 0, type: "button", style: {
                        border: `1px solid ${theme.tint}`,
                    } },
                    React.createElement("div", null, displayText),
                    isOpen ? React.createElement(TriangleUp, null) : React.createElement(TriangleDown, null)),
                React.createElement(DropdownOptions, null, isOpen &&
                    options.map((option) => (React.createElement("li", { key: option.value }, value === option.value ? (React.createElement(DropdownOption, null,
                        React.createElement(OptionText, null,
                            option.value,
                            " - ",
                            option.text))) : (React.createElement(DropdownOption, { onClick: () => handleOptionClick(option.value), type: "button" },
                        React.createElement(OptionText, null,
                            option.value,
                            " - ",
                            option.text))))))))))));
};
const DropdownContainer = styled.div `
  position: relative;
  @media (max-width: ${deviceWidths.phone}) {
    width: 100%;
    margin-bottom: 4px;
  }
`;
const DropdownTitle = styled.button `
  height: 35px;
  display: flex;
  flex: 1 1 70px;
  font-family: inherit;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: white;
  color: black;

  div {
    margin-right: 24px;

    @media (max-width: ${deviceWidths.phone}) {
      margin-right: 6px;
    }
  }
  svg {
    width: 6px;
    margin-left: 6px;
  }

  &:hover {
    cursor: pointer;
  }
`;
const CountryDropdownTitle = styled(DropdownTitle) `
  flex-basis: 280px;
  min-width: 200px;

  @media (max-width: ${deviceWidths.phone}) {
    min-width: unset;
  }

  div {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: ${deviceWidths.phone}) {
      max-width: 180px;
    }
  }
`;
const DropdownOptions = styled.ul `
  z-index: 13;
  width: 200px;
  position: absolute;
  top: 20px;
  left: 0px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
  background-color: white;

  li {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
  }
`;
const DropdownOption = styled.button `
  border: none;
  font-family: inherit;
  width: 100%;
  text-align: left;
  margin: 2px 0px;
  background-color: white;

  @media (max-width: ${deviceWidths.phone}) {
    max-width: 190px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
    background-color: #f4f2f1;
  }
`;
const OptionText = styled.span `
  overflow-wrap: normal;
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
`;
const CountryDropdownOptions = styled(DropdownOptions) `
  width: 310px;

  @media (max-width: ${deviceWidths.phone}) {
    width: 200px;
  }
`;
export default SelectDropdown;
