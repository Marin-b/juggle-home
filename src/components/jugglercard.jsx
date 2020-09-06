import React from 'react'
import styled from 'styled-components'

import { colors, fonts } from '../constants'

const Card = styled.div`
  background-color: ${ colors.secondary };
  height: 360px;
  width: 320px;
  box-shadow: 2px 3px 11px -5px rgba(0,0,0,0.62);
  border-radius: 15px;
  padding: 30px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  transition: transform 0.5s;
  &:hover {
    transform: translate(-1%, -1%)
  }
  @media screen and (max-width: 900px) {
    height: 40vh;
    width: 45vw;
  }
`

const VerifiedTag = styled.div`
  background-color: #399E5A;
  text-transform: uppercase;
  color: white;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 0.8em;
  font-family: ${fonts.title};
  @media screen and (max-width: 900px) {
    font-size: 0.5em;
    top: 10px;
    left: 10px;
  }
`

const Avatar = styled.div`
height: 12vh;
width: 12vh;
border-radius: 50%;
background-size: cover;
background-position: center center;
background-image: url(${props => props.source});
border: 0.7vh solid ${colors.primary};
@media screen and (max-width: 900px) {
  height: 9vh;
  width: 9vh;
}
`


const WhiteBar = styled.div`
height: 20%;
width: ${props => props.short ? "60%" : "100%" };
background-color: white;
opacity: 0.5;
border-radius: 4px;
`

const Rating = styled.div`
  height: 10%;
  margin: 5% 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
`

const Star = styled.i`
  color: ${props => props.filled ? colors.primary : 'transparent'};
  font-size: 25px;
  width: 15%;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`

const JugglerCard = (props) => {
  return (
    <Card style={{marginTop: props.top}}>
      <VerifiedTag>
        Verified
      </VerifiedTag>
      <Avatar source={props.source}/>
      <Rating>
        <Star filled className='fi fi-star'/>
        <Star filled className='fi fi-star'/>
        <Star filled className='fi fi-star'/>
        <Star filled className='fi fi-star'/>
        <Star filled={props.full} className='fi fi-star'/>
      </Rating>
      <div className="text d-flex justify-content-between flex-column" style={{ width: '80%', height: '40%'}}>
        <WhiteBar />
        <WhiteBar />
        <WhiteBar />
        <WhiteBar short />
      </div>
    </Card>
  )
}

export default JugglerCard