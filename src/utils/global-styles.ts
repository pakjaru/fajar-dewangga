import styled, { createGlobalStyle } from "styled-components"

export const background = '#0a192f'
export const backgroundSecondary = '#112240'
export const primary = '#8892b0'
export const primaryLight = '#ccd6f6'
export const secondary = '#64ffda'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing:border-box;
  }

  ::selection {
    background-color: ${primaryLight};
    color: ${primary};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${primary};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${background};
  }

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

export const Container = styled.div`
  margin: auto;
  width: 960px;
  position: relative;

  @media only screen and (max-width: 1199px) {
    width: 820px;
  }

  @media only screen and (max-width: 991px) {
    padding: 0 50px;
    width: 100%;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 25px;
  }
`