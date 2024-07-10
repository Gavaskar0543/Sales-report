import React from 'react'

import styled from 'styled-components'
export default function Statistics({month,saleData}) {
  return (
    <StatisticLayout id='statistic'>
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
       <ReportDiv>
       <Text>{saleData.totalSaleAmout}</Text>
       <ReportText>Total Sale Amount</ReportText>
       </ReportDiv>
       <ReportDiv>
       <Text>{saleData.totalSoldItems}</Text>
       <ReportText>Total Sold Items</ReportText>
       </ReportDiv>
      
       <ReportDiv>
       <Text>{saleData.totalUnsoldItems}</Text>
       <ReportText>Total UnSold Items</ReportText>
       </ReportDiv>
      
      
  
      </DataContainer>
    </StatisticLayout>
  )
}
const StatisticLayout = styled.section`
width:100%;
height:50vh;



`

const TextContainer = styled.div`
display:flex;
justify-content:center;

`
const Text = styled.p`
font-size:1.8rem;
font-weight:800;

`

const DataContainer = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:20px;

`
const ReportText = styled.p`
margin-left:20px;
font-size:1.3rem;
font-weight:600;
color:gray;

`
const ReportDiv = styled.div`
width:300px;
height:150px;
border:2px solid white;
border-radius:10px;
box-shadow:0px 0px 10px gray;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
