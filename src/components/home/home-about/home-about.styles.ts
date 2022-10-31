import styled from "styled-components"

import { triangle } from "@images"
import { secondary } from "@utils/global-styles"

export const About = styled.section`
  padding: 100px 0;

  @media only screen and (max-width: 575px) {
    padding: 50px 0;
  }
`

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin-top: 30px; 
  }

  @media only screen and (max-width: 991px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`

export const AboutContent = styled.div`
  max-width: 596px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 496px;
  }

  @media only screen and (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`

export const AboutText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin: 30px 0 0 0;

  &:first-child {
    margin-top: 0;
  }

  span {
    color: ${secondary};
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 16px;
    margin-top: 20px;
  }
`

export const AboutSkill = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 30px 0 0 0;
  padding-left: 30px;

  li {
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 20px;
    padding-left: 20px;
    position: relative;
    width: 255px;

    &::before {
      background-image: url(${triangle});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      content: "";
      height: 8px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin-top: 20px;
    padding-left: 20px;

    li {
      font-size: 12px;
      width: 195px;
    }
  }

  @media only screen and (max-width: 575px) {
    margin-top: 20px;
    padding-left: 0;

    li {
      font-size: 12px;
      width: 155px;
    }
  }
`

export const AboutImage = styled.div`
  height: 300px;
  flex-shrink: 0;
  padding: 0 20px 20px 0;
  position: relative;
  width: 300px;

  &:hover {
    &::before {
      background-color: transparent;
    }

    &::after {
      transform: translate(-5px, -5px);
    }
  }

  &::before {
    background-color: rgba(100, 255, 218, 0.6);
    border-radius: 4px;
    bottom: 20px;
    content: "";
    left: 0;
    position: absolute;
    right: 20px;
    top: 0;
    transition: background-color 0.2s ease-in-out;
  }

  &::after {
    border: 1px solid #64ffda;
    border-radius: 4px;
    bottom: 0;
    content: "";
    left: 20px;
    position: absolute;
    right: 0px;
    top: 20px;
    transition: transform 0.2s ease-in-out;
    z-index: -1;
  }

  img {
    border-radius: 4px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    height: 250px;
    width: 250px;    
  }

  @media only screen and (max-width: 575px) {
    height: 250px;
    width: 250px;    
  }
`