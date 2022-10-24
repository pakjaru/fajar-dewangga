import styled from "styled-components"

import { primaryLight, secondary } from "@utils/global-styles"

export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const SectionNumber = styled.div`
  color: ${secondary};
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 16px; 
  }
`

export const SectionText = styled.div`
  color: ${primaryLight};
  font-size: 32px;
  font-weight: 600;
  margin-left: 10px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
  }
`

export const Decoration = styled.div`
  background-color: ${primaryLight};
  height: 1px;
  margin-left: 20px;
  width: 200px;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 150px;
  }

  @media only screen and (max-width: 991px) {
    flex: 1;
    width: auto;
  }
`