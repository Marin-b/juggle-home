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
    padding: 2vh 3vh;
    box-decoration-break: clone;
    text-align: center;
    cursor: pointer;
    max-width: 400px;
    &:hover{
        text-decoration: none;
        color:  ${colors.secondary};
    }
    @media screen and (max-width: 900px) {
        font-size: 1.1em;
    }
`
const PrimaryButton = (props) => {
    return <Button href={props.href} style={{ ...props.style}}>
            {props.children}
        </Button>
} 

export default PrimaryButton