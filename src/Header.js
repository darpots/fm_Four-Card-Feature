import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Heading>
      <Title>Reliable, efficient delivery</Title>
      <SubTitle>Powered by Technology</SubTitle>
      <Strapline>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Strapline>
    </Heading>
  )
}

const Heading = styled.div`
  margin: auto;
  max-width: 500px;
  padding-top: 100px;
  
  @media only screen and (max-width: 375px) {
    padding-bottom: 25px;
  }
`

const Title = styled.h1`
  color: var(--darkblue);
  text-align: center;
  font-weight: 200;
  font-size: 36px;
  margin: 0;

  @media only screen and (max-width: 375px) {
    font-size: 24px;
  }
`

const SubTitle = styled.h2`
  color: var(--darkblue);
  text-align: center;
  font-size: 36px;
  margin: 0;

  @media only screen and (max-width: 375px) {
    font-size: 24px;
  }
`

const Strapline = styled.p`
  color: var(--grayishblue);
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 375px) {
    padding: 0 30px;
  }
`
