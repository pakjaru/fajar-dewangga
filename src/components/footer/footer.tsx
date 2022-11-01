import React, { FunctionComponent } from "react"

import { github, instagram, linkedin } from "@images"
import { Container } from "@utils/global-styles"

import { FooterProps } from "./footer.props"
import {
  FooterMain,
  FooterMenu,
  FooterText,
  FooterWrapper
} from "./footer.styles"

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <FooterMain>
      <Container>
        <FooterMenu>
          <a href="https://github.com/pakjaru" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/fajar-dewangga-ba939a183" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/pakjaru" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </FooterMenu>

        <FooterWrapper>
          <FooterText href="https://github.com/bchiang7" target="_blank" rel="noopener noreferrer">Designed by Brittany Chiang</FooterText>
          <FooterText href="https://github.com/pakjaru" target="_blank" rel="noopener noreferrer">Built by Fajar Dewangga</FooterText>
        </FooterWrapper>
      </Container>
    </FooterMain>
  )
}
