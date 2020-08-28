import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 0.35fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 25px;
  }
`

export const gridLocation = {
  first: `2 / 1 / 4 / 2`,
  second: `1 / 2 / 3 / 3`,
  third: `3 / 2 / 5 / 3`,
  fourth: `2 / 3 / 4 / 4`,
}
