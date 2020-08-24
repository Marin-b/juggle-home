import React from "react"
import styled from "styled-components"

import { colors, fonts } from "../../constants"


const Button = styled.a`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border-radius: calc(2vh + 1.5em);
    text-transform: uppercase;
    font-size: 1.5em;
    font-family: ${fonts.title};
    padding: 2vh 3vw;
    box-decoration-break: clone;
    text-align: center;
    cursor: pointer;
    max-width: 400px;
    transition: padding 0.3s;
    &:hover{
        padding: 2vh 4vw;
        color: ${colors.secondary};
    }
    @media screen and (max-width: 900px) {
        font-size: 1.1em;
        padding: 2vh 9vw;
    }
`
const PrimaryButton = (props) => {
    return <Button href={props.href} style={{ ...props.style}}>
            {props.children}
        </Button>
} 

export default PrimaryButton