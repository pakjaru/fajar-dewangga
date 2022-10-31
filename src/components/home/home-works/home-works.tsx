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
    <Works>
      <Container>
        <SectionTitle title="My Works" number="03" />

        <WorksWrapper>
          {works.map((work: WorkItemProps, index: number) => (
            <WorkItem
              key={index}
              image={work.image}
              title={work.title}
              category={work.category}
              description={work.description}
              techs={work.techs}
              url={work.url}
              github={work.github}
              extraClass={(index % 2) ? "even" : "odd" }
            />
          ))}
        </WorksWrapper>
      </Container>
    </Works>
  )
}