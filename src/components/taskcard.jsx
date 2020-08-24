import React, { useState } from "react";
import styled from "styled-components"

import { colors } from "../constants"

const Card = styled.div`
  width: 430px;
  background-color: ${colors.secondary};
  height: 180px;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  float: right;
  box-shadow: 2px 3px 11px -5px rgba(0,0,0,0.62);
  transition: transform 0.5s;
  &:hover {
    transform: translate(-1%, -1%)
  }
  @media screen and (max-width: 900px) {
    width: 280px;
    height: 115px;
    padding: 10px;
    float: right;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`
const Title = styled.h6`
  text-transform: uppercase;
  margin: 0;
  color: white;
  opacity: 0.5;
  font-size: 1em;
`

const Delimiter = styled.hr`
  background-color: white;
  opacity:0.5;
  margin: 5px 0px;
`
const Avatar = styled.div`
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.source});
  @media screen and (max-width: 900px) {
    height: 7vh;
    width: 7vh;
  }
`

const WhiteBar = styled.div`
  height: 20%;
  width: ${props => props.short ? "60%" : "100%" };
  background-color: white;
  opacity: 0.5;
  border-radius: 4px;
`

const PriceTag = styled.div`
  width: 80%;
  background-color: ${colors.primary};
  height: 20%;
  border-radius: 4px;
  margin-right: 5px;
`

const TaskCard = (props) => {
  return(
   <Card style={{ marginRight: props.right }}>
      <Title>
        {props.category}
      </Title>
      <Delimiter/>
      <div className="d-flex h-75">
        <Avatar source={props.avatar}/>
        <div className="d-flex flex-column h-100 justify-content-around pt-2" style={{flexGrow: 1, padding: '0px 20px'}}>
            <WhiteBar />   
            <WhiteBar />   
            <WhiteBar short />   
        </div>
        <div className="d-flex align-items-center h-100 pt-2" style={{color: colors.primary, width: '15%'}}>
          <PriceTag />
          €
        </div>  
      </div>
   </Card>
  )
}

export default TaskCard