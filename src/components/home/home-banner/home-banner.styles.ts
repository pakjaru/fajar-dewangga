import styled from "styled-components"

import { primaryLight, secondary } from "@utils/global-styles"

export const Banner = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  position: relative;
`

export const Introduction = styled.div`
  color: ${secondary};
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`

export const Name = styled.div`
  color: ${primaryLight};
  font-size: 80px;
  font-weight: 600;
  margin-top: 20px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 32px;
  }
`

export const Signature = styled.div`
  font-size: 80px;
  font-weight: 600;
  margin-top: 10px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 32px;
  }
`

export const Description = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-top: 20px;
  max-width: 436px;

  span {
    color: ${secondary};
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    max-width: 298px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 14px;
    max-width: 100%;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${secondary};
  border-radius: 4px;
  color: ${secondary};
  cursor: pointer;
  font-size: 16px;
  margin-top: 60px;
  padding: 20px 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    margin-top: 40px;
    padding: 15px 20px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 14px;
    margin-top: 40px;
    padding: 15px 20px;
  }
`

export const LeftDecoration = styled.div`
  bottom: 220px;
  left: -15px;
  position: fixed;
  
  div {
    align-items: center;
    display: flex;
    transform: rotate(90deg);

    &::after {
      background-color: ${primaryLight};
      content: "";
      height: 1px;
      left: 100%;
      margin-left: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 120px;
    }
  }

  a {
    height: 24px;
    margin-right: 40px;
    transform: rotate(-90deg);
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

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    bottom: 135px;
    left: -10px;

    div::after {
      margin-left: 20px;
      width: 80px;
    }

    a {
      height: 20px;
      margin-right: 20px;
      width: 20px;
    }
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`

export const RightDecoration = styled.div`
  bottom: 240px;
  position: fixed;
  right: -30px;
  
  div {
    transform: rotate(90deg);

    &::after {
      background-color: ${primaryLight};
      content: "";
      height: 1px;
      left: 100%;
      margin-left: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 120px;
    }
  }

  a {
    color: ${primaryLight};
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${secondary};
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    bottom: 165px;
    right: -40px;

    div::after {
      margin-left: 20px;
      width: 80px;
    }

    a {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`
