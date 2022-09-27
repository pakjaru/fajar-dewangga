import React, { FunctionComponent, RefObject, useEffect, useRef } from "react"

import { logo } from "@images"

import { HeaderProps } from "./header.props"
import {
  HeaderContainer,
  HeaderLogo,
  HeaderStyle,
  Nav,
  NavButton,
  NavItem,
  NavMenu,
  NavWrapper 
} from "./header.styles"

export const Header: FunctionComponent<HeaderProps> = () => {
  const menuRef = useRef<HTMLElement>()
  const navRef = useRef<HTMLButtonElement>()

  const onMenuClickHandler = () => {
    if (!menuRef?.current || !navRef?.current) return

    menuRef.current.classList.toggle('active')
    navRef.current.classList.toggle('active')
  }

  const onWindowClickHandler = ({ target }: MouseEvent) => {
    if (window.innerWidth > 767 || !menuRef?.current || !navRef?.current) return
    
    if (
      !menuRef.current.classList.contains('active') &&
      !navRef.current.classList.contains('active')
    ) return

    if (menuRef.current.contains(target as Node)) return

    menuRef.current.classList.remove('active')
    navRef.current.classList.remove('active')
  }

  useEffect(() => {
    window.addEventListener('click', (e) => onWindowClickHandler(e))

    return () => window.removeEventListener('click', (e) => onWindowClickHandler(e))
  }, [])

  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLogo href="/">
          <img src={logo} alt="Logo" />
        </HeaderLogo>

        <Nav ref={navRef as RefObject<HTMLElement>}>
          <NavWrapper>
            <NavItem><a href="/#about">About</a></NavItem>
            <NavItem><a href="/#work">Work</a></NavItem>
            <NavItem><a href="/#contact">Contact</a></NavItem>
          </NavWrapper>
          <NavButton>Resume</NavButton>
        </Nav>

        <NavMenu ref={menuRef as RefObject<HTMLButtonElement>} onClick={onMenuClickHandler}>
          <span></span>
          <span></span>
        </NavMenu>
      </HeaderContainer>
    </HeaderStyle>
  )
}
