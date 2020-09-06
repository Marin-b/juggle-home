import React from "react";
import styled from "styled-components"
import Logo from "./logo"

import { fonts, spacers } from "../constants"

const NavContainer = styled.div`
    position: absolute;
    top: 0px;
    height: 10vh;
    padding-top: 2vh;
    width: 100%;
    display: flex;
    align-items: center;
`

const LogoContainer = styled.div`
    flex-grow: 1;
    position: relative;
    padding-left: ${spacers.padding}
`
const LangContainer = styled.div`
    width: 250px;
    z-index: 10;
    color: white;
    text-align: right;
    padding-right: ${spacers.padding};
    user-select: none;
`

const LangSelector = styled.span`
    font-family: ${fonts.title};
    font-size: 1.1em;
    cursor: pointer;
    text-transform: uppercase
`
const Navbar = (props) => {
    const nextLang = props.lang === 'en' ? 'es' : 'en'
    return <NavContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <LangContainer>
            <LangSelector onClick={() => props.setLang(nextLang)}>
                {nextLang}
            </LangSelector>
        </LangContainer>
    </NavContainer>
}

export default Navbar