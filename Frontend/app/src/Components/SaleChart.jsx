import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const App = ({currMonth,data}) =>  {
	const sortedByLabel = data.sort((a, b) => {
		// Sort based on the lower bound of the range string
		const rangeA = parseInt(a.label.split('-')[0]);
		const rangeB = parseInt(b.label.split('-')[0]);
		return rangeA - rangeB;
	  });
	  
		const options = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text:"Bar stats for - "+currMonth
			},
			axisY: {
				title: "",
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints:sortedByLabel
				
			}]
		}
						
		return (
		<div>
			<CanvasJSChart options = {options} 
			
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	} 			

 
export default App;             