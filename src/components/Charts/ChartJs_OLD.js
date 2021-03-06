import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
const data = [
    {id: '00036', y: 200400, x: 1504121437},
    {id: '00036', y: 200350, x: 1504121156},
    {id: '00036', y: 200310, x: 1504120874},
    {id: '00036', y: 200260, x: 1504120590},
    {id: '00036', y: 200210, x: 1504120306},
    {id: '00036', y: 200160, x: 1504120024},
    {id: '00036', y: 200120, x: 1504119740},
    {id: '00036', y: 200070, x: 1504119458},
    {id: '00036', y: 200020, x: 1504119177},
    {id: '00036', y: 199980, x: 1504118893},
    {id: '00036', y: 199930, x: 1504118611},
    {id: '00036', y: 199880, x: 1504118330},
    {id: '00036', y: 199830, x: 1504118048},
    {id: '00036', y: 199790, x: 1504117763},
    {id: '00036', y: 199740, x: 1504117481}
  ];

export default class ChartComponent extends React.Component{
    render(){
        return(
            <div>
			    <XYPlot height={100} width={100}>
                    <LineSeries data={data} />
                </XYPlot>
	    	</div>

        );
    }
}