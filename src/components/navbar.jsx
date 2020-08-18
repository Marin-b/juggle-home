import React from "react";
import styled from "styled-components"
import Logo from "./logo"

import { colors, fonts } from "../constants"

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
    width: 80vw;
    position: relative;
`
const LangContainer = styled.div`
    width: 20vw;
    z-index: 10;
    color: white;
    text-align: center;
`

const LangSelector = styled.span`
    font-family: ${fonts.title};
    font-size: 1.1em;
    color: ${props => props.selected ? colors.secondary : 'white'};
    cursor: pointer;
`
const Navbar = (props) => {
    return <NavContainer>
        <LogoContainer>
            <div className="container">
                <Logo />
            </div>
        </LogoContainer>
        <LangContainer>
            <LangSelector selected={props.lang === 'en'} onClick={() => props.setLang('en')}>
                En
            </LangSelector>
            <LangSelector>
                &nbsp; | &nbsp;
            </LangSelector>
            <LangSelector selected={props.lang === 'es'} onClick={() => props.setLang('es')}>
                Es
            </LangSelector>
        </LangContainer>
    </NavContainer>
}

export default Navbar