import React from "react";
import styled from "styled-components"
import { SecondaryHeader, Paragraph } from "../components/text"
import { FormattedMessage } from 'react-intl';
import { colors, spacers } from "../constants"
import TaskCard from "../components/taskcard"

const LeftSide = styled.div`
  position: relative;
  width: 50vw;
  min-height: 50vh;
  padding: ${spacers.padding} 0px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const BlueContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80%;
  height: 100%;
  z-index: -1;
  background-color: ${colors.tertiary};
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const CardContainer = styled.div`
  align-items: flex-end;
  @media screen and (max-width: 900px) {
    align-items: center;
  }
`

const RightSide = styled.div`
  width: 60%;
  padding: ${spacers.padding};
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 8vh ${spacers.padding};
  }
`

const SectionContainer = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
const List = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 50%;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0px;
    margin-left: 20px;
  }
  &:before {
    content: "•";
    font-size: 30px;
    color: ${colors.primary};
  }
`

const LEFTLIST = ['cleaning', 'moving', 'delivery', 'handyman', 'assembly']

const RIGHTLIST = ['photovideo', 'computerIT', "pets", 'anything']

const LISTS = [LEFTLIST, RIGHTLIST]

const Category = (props) => {
  return(
    <SectionContainer>
      <LeftSide>
        <BlueContainer />
        <CardContainer className="container text-align-right d-flex flex-column justify-content-around h-100">
          <TaskCard category="cleaning" avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"/>
          <TaskCard right="5vw" category="photo / video" avatar="https://images.unsplash.com/photo-1511945863317-d60e146e9016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1637&q=80"/>
          <TaskCard category="moving" avatar="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
        </CardContainer>
      </LeftSide>
      <RightSide>
        <div className="container">
          <SecondaryHeader style={{color: colors.secondary, marginBottom: "3vw"}}>
            <FormattedMessage id="category.title"/>
          </SecondaryHeader>
          <Paragraph>
            <FormattedMessage id="category.paragraph" />
          </Paragraph>
          <div className="d-flex">
              { LISTS.map(list => <List key={list}>
                  {list.map(item => <ListItem key={item}>
                      <Paragraph>
                        <FormattedMessage id={item} />
                      </Paragraph>
                    </ListItem>
                  )}
                </List>
              )}
          </div>
        </div>
      </RightSide>
    </SectionContainer>
  )
}

export default Category
