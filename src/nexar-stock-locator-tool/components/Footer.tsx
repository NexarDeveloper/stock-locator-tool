import React from "react";
import styled from "styled-components";
import { IncomingColors } from "../types";
import { deviceWidths } from "../lib";
import PoweredByNexar from "./icons/poweredByNexar";

type FooterProps = {
  theme: IncomingColors;
};

const Footer = ({ theme }: FooterProps) => {
  return (
    <FooterContainer>
      <NexarLogo style={{ color: theme.text }}>
        <PoweredByNexar />
      </NexarLogo>
      <FooterText
        style={{ color: theme.text, borderLeft: `1px solid ${theme.tint}` }}
      >
        <span>By using this tool, you agree to Octopart's </span>
        <a href="https://octopart.com/terms" style={{ color: theme.button }}>
          Terms & Conditions
        </a>
        <span> and </span>
        <a href="https://octopart.com/privacy" style={{ color: theme.button }}>
          Privacy Policy
        </a>
        <span>.</span>
      </FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 11px;
  line-height: 8px;
  margin: 40px;
  padding-top: 36px;

  @media (max-width: ${deviceWidths.phone}) {
    margin: 20px;
  }
`;

const FooterText = styled.div`
  padding-left: 12px;
  line-height: 16px;
  text-align: left;

  a {
    text-decoration: none;
  }
`;

const NexarLogo = styled.div`
  display: inline-block;
  padding: 12px;
  border-radius: 4px;
  position: relative;
`;

export default Footer;
