import styled from "styled-components"

import { backgroundSecondary, primaryLight, secondary } from "@utils/global-styles"

export const HeaderStyle = styled.header`
  align-items: center;
  background-color: rgba(10, 25, 47, 0.85);
  display: flex;
  font-family: 'Roboto Mono', monospace;
  height: 90px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 900;

  &.active {
    box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7);
  }

  @media only screen and (max-width: 767px) {
    height: 70px;
  }
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 50px;
  width: 100%;

  @media only screen and (max-width: 767px) {
    padding: 0 25px;
  }
`

export const HeaderLogo = styled.a`
  height: 42px;

  img {
    height: 100%;
  }
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;

  @media only screen and (max-width: 767px) {
    background-color: ${backgroundSecondary};
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;
    width: 55%;

    &.active {
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 575px) {
    width: 75%;
  }
`

export const NavWrapper = styled.ol`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`

export const NavItem = styled.li`
  align-items: center;
  counter-increment: item 1;
  display: flex;
  margin-right: 30px;

  &::before {
    content: "0" counter(item) ".";
    color: ${secondary};
    font-size: 14px;
    margin-right: 5px;
  }
  
  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${primaryLight};
    font-size: 14px;
    position: relative;
    text-decoration: none;

    &:hover::after {
      right: 0;
    }

    &::after {
      background-color: ${secondary};
      bottom: 0;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      right: 100%;
      transition: right 0.2s ease-in-out;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;

    &::before {
      font-size: 18px;
      margin-right: 0;
      margin-bottom: 5px;
    }

    a {
      font-size: 18px;
      text-align: center;
      transition: color 0.2s ease-in-out;
      width: 100%;

      &:hover {
        color: ${secondary};
      }
  
      &::after {
        content: none;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    &::before {
      font-size: 14px;
    }

    a {
      font-size: 14px;
    }
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
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2);
  }

  @media only screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 40px;
    padding: 20px 60px;
  }

  @media only screen and (max-width: 575px) {
    margin-top: 0;
  }
`

export const NavMenu = styled.button`
  background-color: transparent;
  border: none;
  height: 12px;
  position: relative;
  width: 36px;

  &.active {
    span {
      transition: bottom 0.2s ease-in-out,
                  top 0.2s ease-in-out,
                  transform 0.2s ease-in-out 0.4s,
                  width 0.2s ease-in-out 0.2s;
    
      &:nth-child(1) {
        top: 5px;
        transform: rotate(45deg);
      }
  
      &:nth-child(2) {
        bottom: 5px;
        transform: rotate(-45deg);
        width: 100%;
      }
    }
  }

  span {
    background-color: ${secondary};
    height: 2px;
    position: absolute;
    right: 0;
    transition: bottom 0.2s ease-in-out 0.4s,
                  top 0.2s ease-in-out 0.4s,
                  transform 0.2s ease-in-out,
                  width 0.2s ease-in-out 0.2s;

    &:nth-child(1) {
      top: 0;
      width: 100%;
    }
  
    &:nth-child(2) {
      bottom: 0;
      width: 60%;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
