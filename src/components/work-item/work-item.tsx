import React, { FunctionComponent } from "react"

import { github as githubImage, openLink } from "@images"

import { WorkItemProps } from "./work-item.props"
import {
  Item,
  Image,
  Content,
  Category,
  Title,
  Description,
  Techs,
  Buttons,
  CategoryWrapper,
  Association
} from "./work-item.styles"

export const WorkItem: FunctionComponent<WorkItemProps> = props => {
  const {
    image,
    title,
    association,
    associationUrl,
    categories,
    description,
    techs,
    github,
    url,
    extraClass
  } = props

  console.log(associationUrl)

  return (
    <Item className={extraClass} data-aos="fade-up">
      <Image href={url} target="_blank" rel="noopener noreferrer">
        <img src={`/works/${image}`} alt={title} />
      </Image>
      <Content className={extraClass}>
        <CategoryWrapper>
          {categories.map((category, index) => <Category key={index}>{category}</Category>)}
        </CategoryWrapper>
        <Title href={url}>{title}</Title>
        {!!association && (
          <Association>
            <span>in association with</span>
            <a href={associationUrl || '#'}>{association}</a>
          </Association>
        )}
        <Description>{description}</Description>
        <Techs className={extraClass}>
          {techs.map((tech, index) => <li key={index}>{tech}</li>)}
        </Techs>
        <Buttons className={extraClass}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub" />
            </a>
          )}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={openLink} alt="Project" />
          </a>
        </Buttons>
      </Content>
    </Item>
  )
}
