import React from 'react';
import { BrowserRouter as Link, Switch, Route} from "react-router-dom";

//import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Dashboard from './content/Dashboard.js';
import GymExercises from './content/GymExercises.js';
import HealthPerfil from './content/HealthPerfil.js';
import MapGeneral from './content/MapGeneral.js';
import ConfigSetup from './content/ConfigSetup.js';


const Index = () => <Dashboard/>;
const Gym_Exercises = () => <GymExercises/>;
const Health_Perfil = () => <HealthPerfil/>;
const Map_General = () => <MapGeneral/>;
const Config_Setup = () => <ConfigSetup/>;


export default class Content extends React.Component{
    render(){
        return(
            <div className="content">
                <div id="main-screen" className="dynamic-content">
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/gym_exercises/" component={Gym_Exercises} statusMenu={this.props.statusMenu}/>
                        <Route path="/health_perfil/" component={Health_Perfil} statusMenu={this.props.statusMenu}/>
                        <Route path="/map_general/" component={Map_General} />
                        <Route path="/config_setup/" component={Config_Setup} />
                    </Switch>
                </div>
            </div>
        );
    }
}