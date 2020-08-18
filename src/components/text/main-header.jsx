import React from "react";
import styled from "styled-components"

import { fonts, fontSizes } from "../../constants"

const Header = styled.h1`
  font-family: ${fonts.title};
  font-size: ${fontSizes.mainHeader.desktop};
  @media screen and (max-width: 900px) {
    font-size: ${fontSizes.mainHeader.mobile};
  }
`


const MainHeader = (props) => {
  return(
    <Header style={{...props.style}}>
      {props.children}
    </Header>
  )
}

export default MainHeader