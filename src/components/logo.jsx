import React from "react";
import styled from 'styled-components';

import { colors } from '../constants'

const LogoContainer = styled.div`
    font-family: 'Signika', sans-serif;
    color: white;
    font-size: 6vh;
    position: relative;
    display: inline;
`

const YellowDot = styled.div`
    width: 1vh;
    height: 1vh;
    position: absolute;
    border-radius: 50%;
    top: ${props => props.top};
    left: ${props => props.left};
    background-color: ${colors.primary}
`

const Logo = () => {
    return <LogoContainer>
        <YellowDot top="12%" left="60%" />
        <YellowDot  top="5%" left="42%"/>
        Juggle
    </LogoContainer>
}

export default Logo
