import React from "react"
import styled from "styled-components"

import { colors, fonts } from "../../constants"


const Button = styled.div`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border-radius: calc(2vh + 1.5em);
    text-transform: uppercase;
    font-size: 1.5em;
    font-family: ${fonts.title};
    padding: 2vh;
    box-decoration-break: clone;
    text-align: center;
    cursor: pointer;
    max-width: 400px;
    &:hover{
        text-decoration: none;
        color:  ${colors.secondary};
    }
`
const PrimaryButton = (props) => {
    return <a href={props.href} style={{ ...props.style}}>
                <Button>
                    {props.children}
                </Button>
            </a>
} 

export default PrimaryButton