import React from 'react';
import { MdHome, MdFitnessCenter, MdPerson, MdPublic, MdSettings } from 'react-icons/md';
import { BrowserRouter as NavLink, Link } from "react-router-dom";


const divLinkExtra = {
    width: '100%',
  };
const divSpanOpen = {
    visibility: 'visible',
    display: 'flex',

  };
const divSpanHiden = {
    visibility: 'hidden',
    display: 'none',
    
  };
var styleValue;
export default class MenuNav extends React.Component{
/*    constructor(props) {
        super(props)

    }*/
    controllerNav(){
        if(this.props.statusMenu){
            styleValue = divSpanOpen;
        }
        else{
            styleValue = divSpanHiden;
        }
        this.forceUpdate();
    }
    componentWillMount(){
        this.controllerNav();
    }
    componentDidUpdate(prevProps){
        if (!(prevProps.statusMenu === this.props.statusMenu)) {
            this.controllerNav();
        }
    }
    render(){
        return(
            <nav className="menu-nav">
                <div className="menu-slot"><Link to="/" style={divLinkExtra}><button id="btn_dashboard" className="menu-btn ripple"><span className="text-style-menus" style={styleValue}>Dashboard</span><MdHome size={24} style={{color: '#F9F871'}} /></button></Link></div>
                <div className="menu-slot"><Link to="/gym_exercises/" style={divLinkExtra}><button id="btn_gym_exercises" className="menu-btn ripple"><span className="text-style-menus" style={styleValue}>Gym Exercises</span><MdFitnessCenter size={24}  style={{color: '#00C6BA'}}/></button></Link></div>
                <div className="menu-slot"><Link to="/health_perfil/" style={divLinkExtra}><button id="btn_health_perfil" className="menu-btn ripple"><span className="text-style-menus" style={styleValue}>Perfil Saúde</span><MdPerson size={24}  style={{color: '#E39EB5'}}/></button></Link></div>
                <div className="menu-slot"><Link to="/map_general/" style={divLinkExtra}><button id="btn_map_general" className="menu-btn ripple"><span className="text-style-menus" style={styleValue}>Mapa Geral</span><MdPublic size={24}  style={{color: '#30B393'}}/></button></Link></div>			
                <div className="menu-slot"><Link to="/config_setup/" style={divLinkExtra}><button id="btn_config_setup" className="menu-btn ripple"><span className="text-style-menus" style={styleValue}>Configuração</span><MdSettings size={24}  style={{color: '#D3F5FF'}}/></button></Link></div>
            </nav>
        );
    }
}