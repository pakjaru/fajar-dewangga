import * as React from "react"

import { HomeBanner, Layout } from "@components"
import { GlobalHelmet } from "@utils/global-helmet"

const IndexPage = () => {
  return (
    <>
      <GlobalHelmet title="Fajar Dewangga" />

      <Layout>
        <HomeBanner />
      </Layout>
    </>
  )
}

export default IndexPage
