import React from 'react'
import SaleChart from './SaleChart'

export default function BarChart({chartData,month}) {
  const barData = chartData;
  
  const transFormData = Object.entries(barData).map(([range,value]) =>({
    label:range,
    y:value
  }))
  console.log(transFormData)
  return (
    <div id='bar-chart'>
      <SaleChart currMonth={month} data={transFormData} />
    </div>
  )
}
