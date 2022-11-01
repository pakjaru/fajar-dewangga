import { Container } from "@utils/global-styles"
import React, { FunctionComponent } from "react"

import { HomeContactProps } from "./home-contact.props"
import {
  Contact,
  ContactWrapper,
  SectionTitle,
  Description,
  Button
} from "./home-contact.styles"

export const HomeContact: FunctionComponent<HomeContactProps> = () => {
  return (
    <Contact id="contact" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <Container>
        <ContactWrapper>
          <SectionTitle>Get in Touch</SectionTitle>
          <Description>I'm always looking for any new opportunities, whether you have a question or just want to say hi, I'll try my best to catch you up.</Description>
          <Button href="mailto:fajarudewangga@gmail.com">Say Hello</Button>
        </ContactWrapper>
      </Container>
    </Contact>
  )
}