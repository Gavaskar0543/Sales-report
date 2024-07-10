import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const App = () =>  {
	
		const options = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: "Top Free Android Apps - June 2018"
			},
			axisY: {
				title: "Number of Downloads",
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "Apps",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints: [
					{ label: "WhatsApp Messenger", y: 68206498},
					{ label: "Facebook Messenger", y: 55897709},
					{ label: "SHAREit", y: 7570438},
					{ label: "UC Browser", y: 17453224},
					{ label: "MX Player", y: 6389443},
					{ label: "Hotstar", y: 4815084},
					{ label: "Truecaller", y: 7631644}	
				]
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