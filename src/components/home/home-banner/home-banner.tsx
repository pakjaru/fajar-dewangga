import React, { FunctionComponent } from "react"

import { github, instagram, linkedin } from "@images"
import { Container } from "@utils/global-styles"
import { scrollToSection } from "@utils/scroll-to-section"

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
      <LeftDecoration data-aos="fade" data-aos-delay="2100">
        <div>
          <a href="https://github.com/pakjaru" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/fajar-dewangga-ba939a183" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/pakjaru" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </LeftDecoration>

      <Container>
        <Introduction data-aos="fade-up" data-aos-delay="600">Hello, my name is</Introduction>
        <Name data-aos="fade-up" data-aos-delay="800">Fajar Dewangga.</Name>
        <Signature data-aos="fade-up" data-aos-delay="1000">I love building application.</Signature>
        <Description data-aos="fade-up" data-aos-delay="1200">
          I’m a software engineer specializing in front end <span>website</span> developer (with some experience in <span>mobile</span> development).
        </Description>
        <Button onClick={() => scrollToSection('works')} data-aos="fade-up" data-aos-delay="1400">Check out my work!</Button>
      </Container>

      <RightDecoration data-aos="fade" data-aos-delay="2100">
        <div>
          <a href="mailto:fajarudewangga@gmail.com">fajarudewangga@gmail.com</a>
        </div>
      </RightDecoration>
    </Banner>
  )
}
