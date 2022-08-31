import * as React from "react"
import { Helmet } from "react-helmet"

import { GlobalStyles } from "../utils/global-styles"

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Helmet title="Fajar Dewangga" />

      <h1>HOMEPAGE</h1>
    </>
  )
}

export default IndexPage
