import React from "react";
import styled from "styled-components"

import { fonts, fontSizes } from "../../constants"

const Header = styled.h1`
  font-family: ${fonts.title};
  font-size: ${fontSizes.secondaryHeader.desktop};
  @media screen and (max-width: 900px) {
    font-size: ${fontSizes.secondaryHeader.mobile};
  }
`


const SecondaryHeader = (props) => {
  return(
    <Header style={{...props.style}}>
      {props.children}
    </Header>
  )
}

export default SecondaryHeader