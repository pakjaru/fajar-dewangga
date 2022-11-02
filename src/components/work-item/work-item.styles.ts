import styled from "styled-components"

import { backgroundSecondary, primaryLight, secondary } from "@utils/global-styles"

export const Item = styled.div`
  display: flex;
  margin-bottom: 100px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &.even {
    justify-content: flex-end;
  }

  &.odd {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
    min-height: 360px;
  }
`

export const Image = styled.a`
  border-radius: 4px;
  display: block;
  height: 0;
  overflow: hidden;
  padding-top: 37.5%;
  position: relative;
  width: 60%;

  &:hover::before {
    opacity: 0;
  }

  &::before {
    background-color: rgba(100, 255, 218, 0.6);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
  }

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media only screen and (max-width: 991px) {
    height: 100%;
    padding-top: 0;
    position: absolute;
    width: 100%;

    &::before {
      display: none;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  z-index: 10;

  &.even {
    align-items: flex-start;
    left: 0;
    text-align: left;
  }

  &.odd {
    align-items: flex-end;
    right: 0;
    text-align: right;
  }

  @media only screen and (max-width: 991px) {
    padding: 40px;
    position: relative;
    transform: none;
    width: 100%;
    z-index: 5;

    &.even,
    &.odd {
      align-items: flex-start;
      text-align: left;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 20px;
  }
`

export const Category = styled.a`
  color: ${secondary};
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  width: fit-content;

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

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 12px;
  }
`

export const Title = styled.a`
  color: ${primaryLight};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  width: fit-content;
  
  &:hover {
    color: ${secondary};
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 991px) {
    &::before {
      background-color: rgba(17, 34, 64, 0.9);
      bottom: 0;
      content: "";
      left: 0;
      mix-blend-mode: screen;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
  }
`

export const Description = styled.p`
  background-color: ${backgroundSecondary};
  border-radius: 4px;
  line-height: 1.5;
  margin-bottom: 0;
  margin-top: 20px;
  padding: 25px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    padding: 20px;
  }

  @media only screen and (max-width: 991px) {
    background-color: transparent;
    padding: 0;
  }

  @media only screen and (max-width: 575px) {
    font-size: 12px;
  }
`

export const Techs = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-bottom: 0;
  margin-top: 20px;
  padding: 0;

  &.even {
    justify-content: flex-start;
  }

  &.odd {
    justify-content: flex-end;
  }

  li {
    display: block;
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
    margin-right: 20px;
  
    &:last-child {
      margin-right: 0;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 12px;
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 991px) {
    &.even,
    &.odd {
      justify-content: flex-start;
    }
  }
`

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  margin-top: 20px;
  z-index: 10;

  &.even {
    justify-content: flex-start;
  }

  &.odd {
    justify-content: flex-end;
  }

  a {
    height: 20px;
    margin-right: 15px;
    width: 20px;

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

  @media only screen and (max-width: 991px) {
    &.even,
    &.odd {
      justify-content: flex-start;
    }
  }
`
