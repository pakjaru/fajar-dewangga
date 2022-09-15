import * as React from "react"

import { Layout } from "@components"
import { GlobalHelmet } from "@utils/global-helmet"

const IndexPage = () => {
  return (
    <>
      <GlobalHelmet title="Fajar Dewangga" />

      <Layout>
        <h1>HomePage</h1>
      </Layout>
    </>
  )
}

export default IndexPage
