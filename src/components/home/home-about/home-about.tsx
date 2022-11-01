import React, { FunctionComponent } from "react"

import { fajar } from "@images"
import { SectionTitle } from "@components"

import { Container } from "@utils/global-styles"

import { HomeAboutProps } from "./home-about.props"
import {
  About,
  AboutContent,
  AboutImage,
  AboutSkill,
  AboutText,
  AboutWrapper
} from "./home-about.styles"

export const HomeAbout: FunctionComponent<HomeAboutProps> = () => {
  return (
    <About id="about">
      <Container>
        <SectionTitle title="About Me" number="01" />
        
        <AboutWrapper data-aos="fade-up" data-aos-anchor-placement="top-center">
          <AboutContent>
            <AboutText>
              Hello! My name is Fajar Dewangga and I enjoy building application 
              on the internet. My journey in web development began in 2019
              when I’m still a college student — turns out building website with 
              HTML & CSS is so much fun!
            </AboutText>
            <AboutText>
              Until now, I have learned and experienced a lot by going through 
              many trials and mistakes in my journey. I’ve build some application 
              for my <span>clients</span>, which based on <span>websites</span> and <span>mobile</span> platform.
            </AboutText>
            <AboutText>
              Here are a few technologies I’ve been working with recently:
            </AboutText>
            <AboutSkill>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>React Native</li>
              <li>Typescript</li>
              <li>Vue</li>
            </AboutSkill>
          </AboutContent>

          <AboutImage>
            <img src={fajar} alt="Fajar Dewangga" />
          </AboutImage>
        </AboutWrapper>
      </Container>
    </About>
  )
}
