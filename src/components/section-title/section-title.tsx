import React, { FunctionComponent } from "react"

import { SectionTitleProps } from "./section-title.props"
import {
  Decoration,
  SectionNumber,
  SectionText,
  SectionWrapper
} from "./section-title.styles"

export const SectionTitle: FunctionComponent<SectionTitleProps> = (props) => {
  const {
    number,
    title
  } = props

  return (
    <SectionWrapper>
      {number && <SectionNumber>{`${number}.`}</SectionNumber>}
      <SectionText>{title}</SectionText>
      <Decoration />
    </SectionWrapper>
  )
}
