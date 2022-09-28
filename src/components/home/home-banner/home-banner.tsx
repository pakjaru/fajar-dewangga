import React, { FunctionComponent } from "react"

import { github, instagram, linkedin } from "@images/index"
import { Container } from "@utils/global-styles"

import { HomeBannerProps } from "./home-banner.props"
import {
  Banner,
  Button,
  Description,
  Introduction,
  LeftDecoration,
  Name,
  RightDecoration,
  Signature
} from "./home-banner.styles"

export const HomeBanner: FunctionComponent<HomeBannerProps> = () => {
  return (
    <Banner>
      <LeftDecoration>
        <a href="https://github.com/pakjaru" target="_blank">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/fajar-dewangga-ba939a183" target="_blank">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/pakjaru" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
      </LeftDecoration>

      <Container>
        <Introduction>Hello, my name is</Introduction>
        <Name>Fajar Dewangga.</Name>
        <Signature>I love building application.</Signature>
        <Description>
          I’m a software engineer specializing in front end <span>website</span> developer (with some experience in <span>mobile</span> development).
        </Description>
        <Button>Check out my work!</Button>
      </Container>

      <RightDecoration>
        <a href="mailto:fajarudewangga@gmail.com">fajarudewangga@gmail.com</a>
      </RightDecoration>
    </Banner>
  )
}
