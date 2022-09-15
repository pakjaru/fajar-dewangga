import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

interface GlobalHelmetProps {
  title: string
}

export const GlobalHelmet: FunctionComponent<GlobalHelmetProps> = (props) => (
  <Helmet>
    <title>{props.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
  </Helmet>
)
