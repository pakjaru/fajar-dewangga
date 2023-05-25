import React, { FunctionComponent } from "react"

import { Container } from "@utils/global-styles"
import { SectionTitle, WorkItem } from "@components"

import { HomeWorksProps } from "./home-works.props"
import {
  Works,
  WorksWrapper
} from "./home-works.styles"
import { WorkItemProps } from "src/components/work-item/work-item.props"

const works = require("./works.json")

export const HomeWorks: FunctionComponent<HomeWorksProps> = () => {
  return (
    <Works id="works">
      <Container>
        <SectionTitle title="My Works" number="02" />

        <WorksWrapper>
          {works.map((work: WorkItemProps, index: number) => (
            <WorkItem
              key={index}
              {...work}
              extraClass={(index % 2) ? "even" : "odd" }
            />
          ))}
        </WorksWrapper>
      </Container>
    </Works>
  )
}