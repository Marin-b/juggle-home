import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Logo from '../components/logo'
import { MainHeader, Paragraph } from '../components/text'
import { colors } from '../constants'
import { PrimaryButton } from "../components/buttons"

const Section = styled.div`
  background-color: ${colors.secondary};
  padding: 8vh 5vw;
  position: relative;
`

const Main = styled.div`
  margin-bottom: 8vh;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
const FormContainer = styled.div`
  width: 65%;
  text-align: center;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 8vh;
  }
`
const Delimeter = styled.hr`
  background: white;
  opacity: 0.5;
`
const AllRight = styled.div`
  position: absolute;
  left: 5vw;
  bottom: 2vh;
  color: white;
  opacity: 0.5;
`
const Footer = () => {
  return (
    <Section>
        <Main className='d-flex align-items-center'>
          <div class="container">
            <MainHeader style={{color: 'white'}}>
              <FormattedMessage id='footer.title' values={{
                emphasis: <span style={{color: colors.primary}}>
                  <FormattedMessage id='footer.emphasis'/>
                </span>
              }}/>
            </MainHeader>
            <Paragraph style={{color: 'white'}}>
              <FormattedMessage id='footer.paragraph' />
            </Paragraph>
          </div>
          <FormContainer>
            <PrimaryButton>
              <FormattedMessage id='early_access'/>
            </PrimaryButton>
          </FormContainer>
        </Main>
        <Delimeter />
        <div className="d-flex justify-content-between">
          <div className="d-flex">
              <div className='container'>
                <Paragraph style={{color: 'white'}}>
                  <FormattedMessage id='stayintouch'/>
                </Paragraph>
                <div className="d-flex justify-content-between" style={{color: 'white', fontSize: '1.2em'}}>
                  <a href="">
                    <i class="fi fi-twitter"></i>
                  </a>
                  <a href="">
                  <i class="fi fi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fi fi-instagram"></i>
                  </a>
                </div>
              </div>
          </div>
          <Logo />
        </div>
        <AllRight>
          <p>© 2020 Juggle, All rights reserved</p>
        </AllRight>
    </Section>
  )
}

export default Footer