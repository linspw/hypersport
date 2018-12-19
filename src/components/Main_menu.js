import React from 'react';
import MenuNav from './Main_menu/Menu_nav';
import MenuLogo from './Main_menu/Menu_logo';

const divMenuOpen = {
    width: '250px',
  };
const divMenuClosed = {
    width: '50px',
  };
var styleValue;
export default class MainMenu extends React.Component{
/*    constructor(props) {
        super(props)

    }*/
    
    controllerMenu(){
        if(this.props.statusMenu){
            styleValue = divMenuOpen;
        }
        else{
            styleValue = divMenuClosed;
        }
        this.forceUpdate();
    }
    componentWillMount(){
        this.controllerMenu();
    }
    componentDidUpdate(prevProps){
        if (!(prevProps.statusMenu === this.props.statusMenu)) {
            this.controllerMenu();
        }
    }
    render(){
        return(
                

                <div id="main-menu" className="main-menu" style={styleValue}>
                    <MenuLogo setStatusMenu={this.props.setStatusMenu} statusMenu={this.props.statusMenu} setMensage={this.props.setMensage} Mensage={this.props.Mensage}/>
                    <MenuNav setStatusMenu={this.props.setStatusMenu} statusMenu={this.props.statusMenu} setMensage={this.props.setMensage} Mensage={this.props.Mensage}/>
                </div>
        );
    }
}