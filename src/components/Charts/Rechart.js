import React from 'react';
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


export default class ChartComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            PainelWidth: 0,
            PainelHeight: 0,
            data: this.props.data,
            datakey: this.props.datakey
        };
        this.getUpdateDivSize = this.getUpdateDivSize.bind(this);
        this.loggingsytem = this.loggingsytem.bind(this);
    }
    loggingsytem(){
        console.log("ativouuu");
    }
    getUpdateDivSize() {
        
        this.setState({
           /* PainelWidth: (document.getElementById(this.state.name).parentElement.clientWidth-20),*/ 
            PainelHeight: 150,  
        });
        this.forceUpdate();
        
        console.log("ativado");

    }
    componentDidMount(){
        /*this.getUpdateDivSize();
        window.addEventListener("resize", this.getUpdateDivSize);*/
        //document.getElementById("btn_GENERAL").addEventListener("click", this.getUpdateDivSize);
    }
    componentWillUnmount(){
        //window.removeEventListener("resize", this.getUpdateDivSize);
    }
    render(){
        return(
            /*<div id={this.state.name}>*/
              <ResponsiveContainer id={this.state.name} height={150}>
			    <LineChart /*width={this.state.PainelWidth} height={this.state.PainelHeight}*/ data={this.props.data} margin={{ top: 10, right:30, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey={this.state.datakey} stroke="#8884d8" />
                    <CartesianGrid stroke="#8884d8"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
              </ResponsiveContainer>

	    	/*</div>*/

        );
    }
}