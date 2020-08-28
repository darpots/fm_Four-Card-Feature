import React from 'react'
// import styled from 'styled-components'
import Header from './Header'
import { Grid } from './Grid'
import { Card } from './Card'
import { CardData } from './CardData'

function App() {
  return (
    <div>
      <Header />
      <Grid>
        {CardData.map((data) => (
          <Card key={data.title} {...data} />
        ))}
      </Grid>
    </div>
  )
}

export default App
