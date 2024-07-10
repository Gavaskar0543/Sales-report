import React from 'react'

import styled from 'styled-components'
export default function Statistics({month}) {
  return (
    <StatisticLayout>
      <TextContainer>
        <Text>
          Statistic for {month}
        </Text>
      </TextContainer>
      <DataContainer>
        <ul>
          <li>Total Sale:10000</li>
          <li>Total Sold Items:20</li>
          <li>Tatal not sold Items:40</li>
        </ul>
      </DataContainer>
    </StatisticLayout>
  )
}
const StatisticLayout = styled.section`
width:100%;
height:30vh;
background:blue;
color:white;

ul li{
type:none;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
}
`

const TextContainer = styled.div`
display:flex;
justify-content:center;

`
const Text = styled.p`
font-size:2rem;
font-weight:800;

`

const DataContainer = styled.div`
display:flex;
justify-content:center;

`

