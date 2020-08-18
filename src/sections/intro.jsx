import React from "react";
import styled from "styled-components"
import { FormattedMessage } from 'react-intl';

import { MainHeader, Paragraph } from "../components/text"
import { PrimaryButton } from "../components/buttons"
import { colors } from "../constants"

const IntroContainer = styled.div`
  display: flex
`

const IntroMain = styled.div`
  background-color: ${colors.secondary};
  min-height: 90vh;
  padding-top: 15vh 
`
const IntroSider = styled.div`
  position: relative;
  background-color: ${colors.primary};
  width: 20vw;
`


const Intro = (props) => {
  return(
    <IntroContainer>
      <div style={{ width: '80%' }}>
        <IntroMain>
          <div className="container" style={{paddingBottom: '4em'}}>
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
            <Paragraph style={{color: 'white', margin: '2em 0px'}}>
              <FormattedMessage id="intro.paragraph" />
            </Paragraph>
            <PrimaryButton>
              <FormattedMessage id="early_access" />
            </PrimaryButton>
          </div>
        </IntroMain>
        <div style={{backgroundColor: 'white', height: '10vh'}}></div>
      </div>
      <IntroSider>
        
      </IntroSider>
    </IntroContainer>
  )
}

export default Intro