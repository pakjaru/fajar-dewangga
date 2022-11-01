import React, { FunctionComponent, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import { GlobalStyles } from "@utils/global-styles"
import { Header, Footer } from "@components"

import { LayoutProps } from "./layout.props"

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  const {
    children
  } = props

  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
      anchorPlacement: 'bottom-top'
    })
  }, [])

  return (
    <>
      <GlobalStyles />

      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}