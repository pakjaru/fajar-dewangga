import type { GatsbyConfig } from "gatsby"

const path = require('path')

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://fajardewangga.gtsb.io/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "displayName": false,
        "fileName": false
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@images": path.resolve(__dirname, 'src/assets/images'),
          "@components": path.resolve(__dirname, 'src/components'),
          "@utils": path.resolve(__dirname, 'src/utils')
        },
        extensions: [
          "ts"
        ]
      }
    }
  ],
}

export default config
