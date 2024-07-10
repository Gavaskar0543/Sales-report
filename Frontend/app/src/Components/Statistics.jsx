import React from 'react'

import styled from 'styled-components'
export default function Statistics({month,saleData}) {
  return (
    <StatisticLayout>
      <TextContainer>
        <Text>
          Statistic for {month}
        </Text>
      </TextContainer>
      <DataContainer>
        {/* "statistics": {
            "totalSaleAmout": 179.7,
            "totalSoldItems": 1,
            "totalUnsoldItems": 2
        }, */}
       <ul>
          <li>Total Sale:{saleData.totalSaleAmout}</li>
          <li>Total Sold Items:{saleData.totalSoldItems}</li>
          <li>Tatal not sold Items:{saleData.totalUnsoldItems}</li>
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

