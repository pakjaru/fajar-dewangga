import React, { FunctionComponent } from "react"

import { GlobalStyles } from "@utils/global-styles"
import { Header, Footer } from "@components"

import { LayoutProps } from "./layout.props"

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  const {
    children
  } = props

  return (
    <>
      <GlobalStyles />

      <Header />
        {children}
      <Footer />
    </>
  )
}