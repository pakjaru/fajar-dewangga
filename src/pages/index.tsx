import * as React from "react"

import {
  HomeAbout, HomeBanner, HomeContact, Layout
} from "@components"
import { GlobalHelmet } from "@utils/global-helmet"

const IndexPage = () => {
  return (
    <>
      <GlobalHelmet title="Fajar Dewangga" />

      <Layout>
        <HomeBanner />
        <HomeAbout />
        <HomeContact />
      </Layout>
    </>
  )
}

export default IndexPage
