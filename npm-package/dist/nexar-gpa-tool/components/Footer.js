import React from "react";
import styled from "styled-components";
import { deviceWidths } from "../lib";
import PoweredByNexar from "./icons/poweredByNexar";
const Footer = ({ theme }) => {
    return (React.createElement(FooterContainer, null,
        React.createElement(NexarLogo, { style: { color: theme.text } },
            React.createElement(PoweredByNexar, null)),
        React.createElement(FooterText, { style: { color: theme.text, borderLeft: `1px solid ${theme.tint}` } },
            React.createElement("span", null, "By using this tool, you agree to Octopart's "),
            React.createElement("a", { href: "https://octopart.com/terms", style: { color: theme.button } }, "Terms & Conditions"),
            React.createElement("span", null, " and "),
            React.createElement("a", { href: "https://octopart.com/privacy", style: { color: theme.button } }, "Privacy Policy"),
            React.createElement("span", null, "."))));
};
const FooterContainer = styled.div `
  display: flex;
  align-items: center;
  font-size: 11px;
  line-height: 8px;
  margin: 40px;
  padding-top: 36px;

  @media (max-width: ${deviceWidths.phone}) {
    margin: 20px;
  }
`;
const FooterText = styled.div `
  padding-left: 12px;
  line-height: 16px;

  a {
    text-decoration: none;
  }
`;
const NexarLogo = styled.div `
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  position: relative;
`;
export default Footer;
