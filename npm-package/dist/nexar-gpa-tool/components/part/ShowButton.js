import React from "react";
import styled from "styled-components";
import AngleDown from "../icons/AngleDown";
import AngleUp from "../icons/AngleUp";
import { deviceWidths } from "../../lib";
const ShowButton = ({ result, isShowingAll, handleShowAllClick, handleShowFewerClick, theme, }) => (React.createElement(React.Fragment, null, result.part.sellers.length > 5 && (React.createElement(React.Fragment, null,
    !isShowingAll && (React.createElement(StyledShowButton, { onClick: handleShowAllClick, type: "button", style: theme.background !== "#FFFFFF"
            ? {
                border: `1px solid ${theme.button}`,
                backgroundColor: theme.button,
                color: theme.buttonSecondary,
            }
            : {
                border: `1px solid ${theme.button}`,
                backgroundColor: theme.buttonSecondary,
                color: theme.button,
            } },
        React.createElement(StyledIcon, null,
            React.createElement(AngleDown, null)),
        React.createElement(ButtonText, null, "Show All"))),
    isShowingAll && (React.createElement(StyledShowButton, { onClick: handleShowFewerClick, type: "button", style: {
            border: `1px solid ${theme.button}`,
            backgroundColor: theme.button,
            color: theme.buttonSecondary,
        } },
        React.createElement(StyledIcon, null,
            React.createElement(AngleUp, null)),
        React.createElement(ButtonText, null, "Show Fewer")))))));
const StyledShowButton = styled.button `
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  padding: 4px 8px;
  margin: 8px 0px;
  height: 25px;
  width: 200px;
  align-self: center;
  display: flex;
  justify-content: center;

  @media (max-width: ${deviceWidths.tablet}) {
    height: 40px;
    margin-left: unset;
  }

  &:hover {
    cursor: pointer;
  }
`;
const StyledIcon = styled.span `
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  svg {
    width: 9px;
  }
`;
const ButtonText = styled.span `
  margin-left: 4px;
  height: 100%;
  align-items: center;
  display: inline-flex;
`;
export default ShowButton;
