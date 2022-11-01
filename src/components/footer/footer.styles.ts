import styled from "styled-components"

import { primary, secondary } from "@utils/global-styles"

export const FooterMain = styled.footer`
  margin-top: 100px;
  padding: 50px 0;

  @media only screen and (max-width: 575px) {
    margin-top: 50px;
  }
`

export const FooterMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  a {
    height: 24px;
    margin-right: 40px;
    width: 24px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      img {
        filter: brightness(100);
      }
    }

    img {
      height: 100%;
      width: 100%;
    }
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 20px;

    a {
      height: 20px;
      margin-right: 20px;
      width: 20px;
    }
  }
`

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FooterText = styled.a`
  color: ${primary};
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  margin: 10px 0 0 0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${secondary};
  }
`