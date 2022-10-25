import React, { FunctionComponent } from "react"

import { Container } from "@utils/global-styles"

import { FooterProps } from "./footer.props"
import {
  FooterMain,
  FooterText,
  FooterWrapper
} from "./footer.styles"

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <FooterMain>
      <Container>
        <FooterWrapper>
          <FooterText href="https://github.com/bchiang7" target="_blank" rel="noopener noreferrer">Designed by Brittany Chiang</FooterText>
          <FooterText href="https://github.com/pakjaru" target="_blank" rel="noopener noreferrer">Built by Fajar Dewangga</FooterText>
        </FooterWrapper>
      </Container>
    </FooterMain>
  )
}
