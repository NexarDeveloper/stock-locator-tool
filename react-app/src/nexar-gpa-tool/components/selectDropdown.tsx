import useClickOutsideOrEscape from "../hooks/useClickOutsideOrEscape";
import styled from "styled-components";
import { deviceWidths } from "../lib";
import TriangleUp from "./icons/triangleUp";
import TriangleDown from "./icons/triangleDown";
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

export const SelectDropdown = ({
  name,
  onClick,
  options,
  value,
  theme,
}: DropdownProps) => {
  const { handleClick, isOpen, ref } =
    useClickOutsideOrEscape<HTMLDivElement>();
  const handleOptionClick = (value: string) => {
    onClick(value);
    handleClick();
  };
  const displayText =
    name !== "country" ? value : options.find((o) => o.value === value)?.text;
  return (
    <>
      <DropdownContainer ref={ref}>
        {name === "country" && (
          <>
            <CountryDropdownTitle
              onClick={handleClick}
              tabIndex={0}
              type="button"
              style={{
                backgroundColor: "white",
                border: `1px solid ${theme.tint}`,
                color: "black",
              }}
            >
              <>{displayText}</>
              {isOpen ? <TriangleUp /> : <TriangleDown />}
            </CountryDropdownTitle>
            <CountryDropdownOptions
              style={{ backgroundColor: theme.background }}
            >
              {isOpen &&
                options.map((option) => (
                  <li key={option.value}>
                    {value === option.value ? (
                      <DropdownOption
                        style={{
                          borderTop: `1px solid grey`,
                          color: "black",
                          backgroundColor: "white",
                        }}
                      >
                        <OptionText>{option.text}</OptionText>
                      </DropdownOption>
                    ) : (
                      <DropdownOption
                        onClick={() => handleOptionClick(option.value)}
                        type="button"
                        style={{
                          borderTop: `1px solid grey`,
                          color: "black",
                          backgroundColor: "white",
                        }}
                      >
                        <OptionText>{option.text}</OptionText>
                      </DropdownOption>
                    )}
                  </li>
                ))}
            </CountryDropdownOptions>
          </>
        )}
        {name !== "country" && (
          <>
            <DropdownTitle
              onClick={handleClick}
              tabIndex={0}
              type="button"
              style={{
                backgroundColor: "white",
                border: `1px solid ${theme.tint}`,
                color: "black",
              }}
            >
              <div>{displayText}</div>
              {isOpen ? <TriangleUp /> : <TriangleDown />}
            </DropdownTitle>
            <DropdownOptions style={{ backgroundColor: theme.background }}>
              {isOpen &&
                options.map((option) => (
                  <li key={option.value}>
                    {value === option.value ? (
                      <DropdownOption
                        style={{
                          borderTop: `1px solid grey`,
                          color: "black",
                          backgroundColor: "white",
                        }}
                      >
                        <OptionText>
                          {option.value} - {option.text}
                        </OptionText>
                      </DropdownOption>
                    ) : (
                      <DropdownOption
                        onClick={() => handleOptionClick(option.value)}
                        type="button"
                        style={{
                          borderTop: `1px solid grey`,
                          color: "black",
                          backgroundColor: "white",
                        }}
                      >
                        <OptionText>
                          {option.value} - {option.text}
                        </OptionText>
                      </DropdownOption>
                    )}
                  </li>
                ))}
            </DropdownOptions>
          </>
        )}
      </DropdownContainer>
    </>
  );
};

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownTitle = styled.button`
  height: 35px;
  display: flex;
  flex: 1 1 70px;
  font-family: inherit;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

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

const CountryDropdownTitle = styled(DropdownTitle)`
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

const DropdownOptions = styled.ul`
  z-index: 13;
  width: 200px;
  position: absolute;
  top: 20px;
  left: 0px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
  }
`;

const DropdownOption = styled.button`
  border: none;
  font-family: inherit;
  width: 100%;
  text-align: left;

  @media (max-width: ${deviceWidths.phone}) {
    max-width: 190px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${(props) => props.theme.row1};
    cursor: pointer;
  }
`;

const OptionText = styled.span`
  overflow-wrap: normal;
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-size: 12px;
  line-height: 16px;
`;

const CountryDropdownOptions = styled(DropdownOptions)`
  width: 310px;

  @media (max-width: ${deviceWidths.phone}) {
    width: 200px;
  }
`;

export default SelectDropdown;
