import React from "react";
import styled from "styled-components"

import { fonts, fontSizes } from "../../constants"

const Para = styled.p`
  font-family: ${fonts.paragraph};
  font-size: ${fontSizes.paragraph.desktop};
  opacity: 0.8;
  @media screen and (max-width: 900px) {
    font-size: ${fontSizes.paragraph.mobile};
  }
`


const Paragraph = (props) => {
  return(
    <Para style={{...props.style}}>
      {props.children}
    </Para>
  )
}

export default Paragraph