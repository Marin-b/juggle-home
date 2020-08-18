import React from 'react';
import styled from "styled-components"
import { FormattedMessage } from 'react-intl'

import { colors } from '../constants'

import { MainHeader, Paragraph } from "../components/text"

const SectionWrapper = styled.div`
    text-align: center;
    padding: 20vh 0px;

`
const NoChance = () => {
    return <SectionWrapper>
        <div className="container text-center">
            <MainHeader style={{color: colors.secondary}}>
                <FormattedMessage id="nochance.title" values={{lb: <br />}}/>
            </MainHeader>
            <Paragraph>
                <FormattedMessage id="nochance.paragraph" />
            </Paragraph>
        </div>
    </SectionWrapper>
}

export default NoChance