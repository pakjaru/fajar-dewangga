import React, { FunctionComponent, RefObject, useEffect, useRef } from "react"

import { logo } from "@images"
import { scrollToSection } from "@utils/scroll-to-section"

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
  const headerRef = useRef<HTMLElement>()
  const menuRef = useRef<HTMLElement>()
  const navRef = useRef<HTMLButtonElement>()

  const removeHeaderActiveClass = () => {
    if (window.innerWidth > 991 || !menuRef?.current || !navRef?.current) return

    menuRef.current.classList.remove('active')
    navRef.current.classList.remove('active')
    document.querySelector('body')?.classList.remove('blur')
  }

  const onNavClickHandler = (section: string) => {
    removeHeaderActiveClass()
    scrollToSection(section)
  }

  const onMenuClickHandler = () => {
    if (!menuRef?.current || !navRef?.current) return

    menuRef.current.classList.toggle('active')
    navRef.current.classList.toggle('active')
    document.querySelector('body')?.classList.toggle('blur')
  }

  const onWindowClickHandler = ({ target }: MouseEvent) => {
    if (window.innerWidth > 991 || !menuRef?.current || !navRef?.current) return
    
    if (
      menuRef.current.classList.contains('active') &&
      navRef.current.classList.contains('active')
    ) {
      if (
        !navRef.current.contains(target as Node) &&
        !menuRef.current.contains(target as Node)
      ) {
        removeHeaderActiveClass()
      }
    }
  }

  const onWindowScrollHandler = () => {
    if (!headerRef.current) return

    if (window.scrollY > 10) return headerRef.current.classList.add('active')

    headerRef.current.classList.remove('active')
  }

  useEffect(() => {
    window.addEventListener('click', (e) => onWindowClickHandler(e))
    window.addEventListener('scroll', onWindowScrollHandler)

    return () => {
      window.removeEventListener('click', (e) => onWindowClickHandler(e))
      window.removeEventListener('scroll', onWindowScrollHandler)
    }
  }, [])

  return (
    <HeaderStyle ref={headerRef as RefObject<HTMLElement>}>
      <HeaderContainer>
        <HeaderLogo href="/">
          <img src={logo} alt="Logo" />
        </HeaderLogo>

        <Nav ref={navRef as RefObject<HTMLElement>}>
          <NavWrapper>
            <NavItem data-aos="fade-down" data-aos-duration="300" data-aos-delay="0"><button onClick={() => onNavClickHandler('about')}>About</button></NavItem>
            <NavItem data-aos="fade-down" data-aos-duration="300" data-aos-delay="50"><button onClick={() => onNavClickHandler('works')}>Works</button></NavItem>
            <NavItem data-aos="fade-down" data-aos-duration="300" data-aos-delay="100"><button onClick={() => onNavClickHandler('contact')}>Contact</button></NavItem>
          </NavWrapper>
          <NavButton data-aos="fade-down" data-aos-duration="300" data-aos-delay="150">Resume</NavButton>
        </Nav>

        <NavMenu ref={menuRef as RefObject<HTMLButtonElement>} onClick={onMenuClickHandler} data-aos="fade-down" data-aos-duration="300">
          <span></span>
          <span></span>
        </NavMenu>
      </HeaderContainer>
    </HeaderStyle>
  )
}
