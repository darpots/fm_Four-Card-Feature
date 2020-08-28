import React from 'react'
import { gridLocation } from './Grid'
import styled from 'styled-components'

export const Card = ({ ...props }) => {
  return (
    <Cell {...props}>
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <span>
        <img src={props.icon} alt={props.title} />
      </span>
    </Cell>
  )
}

const Cell = styled.div`
  grid-area: ${(props) => gridLocation[props.location]};

  width: 350px;
  height: 250px;
  background-color: white;
  border-top: 4px solid var(--${(props) => props.border});
  border-radius: 7px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 25px;

  :last-child {
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 375px) {
    width: 310px;
    height: 225px;
  }

  h1 {
    color: var(--darkblue);
    font-size: 20px;
    margin-left: 35px;

    @media only screen and (max-width: 375px) {
      margin-top: 0;
    }
  }

  p {
    margin-left: 35px;
    padding-right: 35px;
    font-size: 13px;
    color: var(--grayishblue);
  }
  span {
    text-align: right;
    margin-right: 35px;
  }
`
