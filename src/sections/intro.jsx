import React from "react";
import styled from "styled-components"
import { FormattedMessage } from 'react-intl';

import { MainHeader, Paragprah } from "../components/text"

import { colors } from "../constants"

const IntroContainer = styled.div`
  display: flex
`

const IntroMain = styled.div`
  background-color: ${colors.secondary};
  height: 90vh;
  width: 80%;
  padding-top: 15vh 
`
const IntroSider = styled.div`
  position: relative;
  background-color: ${colors.primary};
  width: 20%;
  height: 100vh;
`


const Intro = (props) => {
  return(
    <IntroContainer>
      <IntroMain>
      <div className="container">
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
        <Paragprah style={{color: 'white'}}>
          Juggle will help you get stuff done by posting any tasks you need 
          accomplishedand get connected to the right professionals, all while working
        </Paragprah>
      </div>
      </IntroMain>
      <IntroSider>
        
      </IntroSider>
    </IntroContainer>
  )
}

export default Intro