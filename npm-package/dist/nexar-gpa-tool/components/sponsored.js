import React from "react";
import Info from "./icons/info";
import useHover from "../hooks/useHover";
import styled from "styled-components";
const Sponsored = ({ theme }) => {
    const [isHovered, handleMouseOut, handleMouseOver] = useHover();
    return (React.createElement(SponsoredContainer, { style: { color: theme.text } },
        React.createElement("p", { "data-event": "click focus", onMouseOut: handleMouseOut, onMouseOver: handleMouseOver },
            React.createElement("span", null, "Sponsored"),
            React.createElement(Info, null)),
        isHovered && (React.createElement(Tooltip, { "data-event": "click focus", onMouseOut: handleMouseOut, onMouseOver: handleMouseOver },
            React.createElement(TooltipContent, null,
                React.createElement(TooltipText, null,
                    "Nexar is compensated by the distributors listed here, and payment is one of several factors used to rank the order that distributors are listed in. As a free service, Nexar relies on sponsorship from advertisers including distributors and manufacturers. Visit our",
                    " ",
                    React.createElement("a", { href: "https://octopart.com/faq#how-does-octopart-make-money", target: "_blank", rel: "noreferrer", style: { color: theme.button } }, "FAQ"),
                    " ",
                    "to learn more."))))));
};
const SponsoredContainer = styled.div `
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  span {
    font-size: 13px;
    line-height: 16px;
  }

  svg {
    height: 11px;
    margin-left: 4px;
    width: 11px;
  }
`;
const Tooltip = styled.div `
  width: 225px;
  z-index: 2;
  border-radius: 4px;
  display: block;
  position: absolute;
  right: 0px;
  top: 40px;
  background-color: white;
  border: 1px solid black;

  &:before {
    right: 35px;
    background-color: inherit;
    border: inherit;
    box-shadow: inherit;
    content: "";
    display: block;
    height: 12px;
    position: absolute;
    transform: rotate(-45deg);
    width: 12px;
    z-index: 1;
  }
`;
const TooltipContent = styled.div `
  background: inherit;
  border-radius: inherit;
  padding: 5px 4px 5px 4px;
  position: relative;
  z-index: 2;
`;
const TooltipText = styled.div `
  font-size: 12px;
  line-height: 15px;
  color: black;
`;
export default Sponsored;
