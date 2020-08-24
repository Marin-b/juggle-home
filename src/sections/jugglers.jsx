import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { SecondaryHeader, Paragraph } from '../components/text'
import JugglerCard from '../components/jugglercard'
import { colors, spacers } from '../constants'

const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  min-height: 50vh;
  padding: ${spacers.padding} 0px;
  @media screen and (max-width: 900px) {
    width: 100%; 
  }
`

const YellowContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 80%;
  height: 100%;
  z-index: -1;
  background-color: ${colors.primary};
  @media screen and (max-width: 900px) {
    width: 100%; 
  }
`
const LeftSide = styled.div`
  width: 40%;
  padding: ${spacers.padding};
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 8vh ${spacers.padding};
  }
`

const SectionContainer = styled.div`
  display: flex;
  padding: ${spacers.padding} 0px;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

const Jugglers = () => {
	return (
		<SectionContainer>
			<LeftSide>
				<div className="container">
					<SecondaryHeader style={{color: colors.secondary, marginBottom: "3vw"}}>
						<FormattedMessage id='jugglers.title'/>
					</SecondaryHeader>
					<Paragraph>
						<FormattedMessage id="jugglers.paragraph"/>
					</Paragraph>
				</div>
			</LeftSide>
			<RightSide>
				<YellowContainer />
				<JugglerCard full  top='-8%'source='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' />
        <JugglerCard  top='8%' source='https://images.unsplash.com/photo-1598226863630-2826f1d31532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
			</RightSide>
		</SectionContainer>
	)
}

export default Jugglers