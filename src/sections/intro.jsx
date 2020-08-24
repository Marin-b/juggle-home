import React from "react";
import styled from "styled-components"
import { FormattedMessage } from 'react-intl';

import { MainHeader, Paragraph } from "../components/text"
import { PrimaryButton } from "../components/buttons"
import { colors, spacers } from "../constants"

const IntroContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

const IntroMain = styled.div`
  background-color: ${colors.secondary};
  min-height: 90%;
  padding-top: 15vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
`
const IntroSider = styled.div`
  position: relative;
  background-color: ${colors.primary};
  width: 250px;
  position: relative;
  @media screen and (max-width: 1000px)  {
    display: none;
  }
`
const MainContainer = styled.div`
  padding-bottom: ${spacers.margin.desktop};
  padding-left: ${spacers.padding}
`

const Intro = (props) => {
  return(
    <IntroContainer>
      <div style={{flexGrow: "1"}}>
        <IntroMain>
          <MainContainer>
            <MainHeader style={{color: 'white'}}>
              <FormattedMessage 
                id="intro.header"
                values={{
                  lb: <br />,
                  emphasis: <span style={{color: colors.primary}}> 
                      <FormattedMessage 
                          id="intro.emphasis"
                        />
                  </span>
                }}
              />
            </MainHeader>
            <Paragraph style={{color: 'white', margin: '2em 0px', maxWidth: "700px"}}>
              <FormattedMessage id="intro.paragraph" />
            </Paragraph>
            <PrimaryButton>
              <FormattedMessage id="early_access" />
            </PrimaryButton>
          </MainContainer>
        </IntroMain>
      </div>
      <IntroSider>
        <img 
          src="https://images.unsplash.com/photo-1523408255168-75b935ec2bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" 
          alt=""
          style={{height: "70vh", position: "absolute", top: "10vh", right: "0px"}}
        />
      </IntroSider>
    </IntroContainer>
  )
}

export default Intro