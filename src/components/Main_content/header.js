import React from 'react';

const divMainContentActive = {
    width: 'calc(100% - 250px)',
 };
 const divMainContentDesactive = {
    width: 'calc(100% - 50px)'
 
 };
 var styleValue;

export default class Header extends React.Component{
/*	constructor(props) {
        super(props)

    }*/
    controllerContent(){
        if(this.props.statusMenu && this.props.ScreenWidth>767){
            styleValue = divMainContentActive;
        }
        else{
            styleValue = divMainContentDesactive;
        }
        this.forceUpdate();
    }
    componentWillMount(){
        this.controllerContent();
    }
    componentDidUpdate(prevProps){
        if (!(prevProps.statusMenu === this.props.statusMenu)) {
            this.controllerContent();
        }
    }
    render(){
        return(
            <div className="header" style={styleValue}>
				<div className="header-left">
				</div>
				<div className="header-center">
					<button id="btn_logo" className="btn-links"><div className="menu-image-logo" id="logo-2"><span className="text-style-logo">HyperSports</span><img src="/media/images/surfer-big-wave.png" width="36px" height="36px" alt="HyperSports"/></div></button>
				</div>
                <div className="header-right">
				</div>
			</div>
        );
    }
}