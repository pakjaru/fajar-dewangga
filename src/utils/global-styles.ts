import { createGlobalStyle } from "styled-components"

export const background = '#0a192f'
export const primary = '#8892b0'
export const primaryLight = '#ccd6f6'
export const secondary = '#64ffda'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${background};
    color: ${primary};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
  }
`