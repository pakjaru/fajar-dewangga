import React, { FunctionComponent } from "react"

import { logo } from "@images"

import { HeaderProps } from "./header.props"
import {
  HeaderContainer,
  HeaderLogo,
  HeaderStyle,
  Nav,
  NavButton,
  NavItem,
  NavWrapper 
} from "./header.styles"

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLogo href="/" className="header__logo">
          <img src={logo} alt="Logo" />
        </HeaderLogo>

        <Nav>
          <NavWrapper>
            <NavItem><a href="/#about">About</a></NavItem>
            <NavItem><a href="/#work">Work</a></NavItem>
            <NavItem><a href="/#contact">Contact</a></NavItem>
          </NavWrapper>
          <NavButton>Resume</NavButton>
        </Nav>
      </HeaderContainer>
    </HeaderStyle>
  )
}
