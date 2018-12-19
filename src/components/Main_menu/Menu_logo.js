import React from 'react';
import { MdMenu } from 'react-icons/md';


const divLogoClose = {
   //visibility: 'hidden',
    display: 'none', 
    marginRight: '20px',
};
const divLogoOpen = {
    display: 'flex', 
    marginRight: '20px',
    //visibility: 'visible',
};

const divBtnOpen ={
    transform: 'rotate(90deg)',
    color:'#41bfcc',
    transition: '0.5s',
}
const divBtnClosed ={
    transform: 'rotate(0deg)',
    color:'#41bfcc',
    transition: '0.5s',
}
var styleValue, styleBT;

export default class MenuLogo extends React.Component{
 /*   constructor(props) {
        super(props)
    }*/
    controllerLogo(){
        if(this.props.statusMenu){
            styleValue = divLogoOpen;
            styleBT = divBtnOpen;
            console.log("apresentando Aberto", styleValue, "Status", this.props.statusMenu);
        }
        else{
            styleValue = divLogoClose;
            styleBT = divBtnClosed;
            console.log("apresentando Fechado", styleValue, "Status", this.props.statusMenu);
        }
        this.forceUpdate();
    }
    componentWillMount(){
        this.controllerLogo();
    }
    componentDidUpdate(prevProps){
        if (!(prevProps.statusMenu === this.props.statusMenu)) {
            this.controllerLogo();
            console.log("Props:", this.props);
        }
    }
    render(){
        return(
            <div className="menu-logo">
				<div id="logo-1" style={styleValue}><button className="btn-links"><span className="text-style-apice">DashBoard</span></button></div>
				<button id="btn_GENERAL" className="btn-links" onClick={(event) => { this.props.setStatusMenu(); this.props.setMensage(event)}}><MdMenu id="bt-mn" size={24} style={styleBT}/></button>
			</div>
        );
    }
}