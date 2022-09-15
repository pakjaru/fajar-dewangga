import styled from "styled-components"

import { primaryLight, secondary } from "@utils/global-styles"

export const HeaderStyle = styled.header`
  align-items: center;
  display: flex;
  font-family: 'Roboto Mono', monospace;
  height: 100px;
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1820px;
  width: 100%;
`

export const HeaderLogo = styled.a`
  height: 52px;

  img {
    height: 100%;
  }
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
`

export const NavWrapper = styled.ol`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`
  counter-increment: item 1;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${primaryLight};
    font-size: 14px;
    text-decoration: none;

    &::before {
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: ${secondary};
      font-size: 14px;
  }
`

export const NavButton = styled.button`
  background-color: transparent;
  border: 1px solid ${secondary};
  border-radius: 4px;
  color: ${secondary};
  cursor: pointer;
  font-size: 14px;
  margin-left: 30px;
  padding: 10px 20px;
` 
