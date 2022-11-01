import styled from "styled-components"

import { secondary } from "@utils/global-styles"

export const Contact = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 100px 0;

  @media only screen and (max-width: 575px) {
    padding: 50px 0;
  }
`

export const ContactWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 480px;
`

export const SectionTitle = styled.h2`
  color: ${secondary};
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  margin: 0;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 16px;
  }
`

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 0;
  margin-top: 20px;
  text-align: center;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 16px;
  }
`

export const Button = styled.a`
  background-color: transparent;
  border: 1px solid ${secondary};
  border-radius: 4px;
  color: ${secondary};
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
  padding: 20px 40px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    margin-top: 20px;
    padding: 15px 20px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 14px;
    margin-top: 20px;
    padding: 15px 20px;
  }
`
