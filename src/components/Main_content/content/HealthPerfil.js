import React from 'react';
import ChartComponent from '../../Charts/Rechart';
import { FaHeart } from 'react-icons/fa';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Draggable from 'react-draggable';
import EChartComponent from '../../Charts/ECharts';



const data1 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
    {name: '02/12', BC: 90, pv: 2400, amt: 2400},
    {name: '03/12', BC: 110, pv: 2400, amt: 2400},
    {name: '04/12', BC: 130, pv: 2400, amt: 2400},
    {name: '05/12', BC: 160, pv: 2400, amt: 2400},
    {name: '06/12', BC: 150, pv: 2400, amt: 2400},
    {name: '07/12', BC: 120, pv: 4300, amt: 2100},
];

export default class HealthPerfil extends React.Component{
    componentDidMount(){
        console.log(this.props.statusMenu);
    }
    render(){
        return(
            <div id="main-container" className="dynamic-grid-container" >
                <div className="dynamic-grid-item-title"><span className="text-style-soft">Health Perfil</span></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header"><ChartComponent name={"chart5"} data={data2} datakey={"BC"}/></div><div className="card-default-body">Vídeo Exemplo.</div></div></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header"><ChartComponent name={"chart6"} data={data2} datakey={"BC"}/></div><div className="card-default-body">Vídeo Exemplo.</div></div></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header"><ChartComponent name={"chart7"} data={data2} datakey={"BC"}/></div><div className="card-default-body">Vídeo Exemplo.</div></div></div>
                <div className="dynamic-grid-item-bigcolumn"><div className="card-default"><div className="card-default-header"><EChartComponent/></div><div className="card-default-body">Vídeo Exemplo.</div></div></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header">
                    <Video autoPlay={false} loop muted
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        poster=""
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src="../media/videos/Hawaii-motivational.mp4" type="video/mp4" />
                    </Video>
                    
                </div><div className="card-default-body">Vídeo Exemplo.</div></div></div>
                <div className="dynamic-grid-item-doublecolumn"><div className="card-classic"><div className="card-default-body">Vídeo Exemplo.</div></div></div>

                

            </div>
        );
    }
}