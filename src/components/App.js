import React from 'react';
import MainContent from './Main_content';
import MainMenu from './Main_menu';
import { BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            statusMenu: false,
            Mensage: 'false',
            ScreenHeight: window.innerHeight, 
            ScreenWidth: window.innerWidth,
        };
        this.setMensage = this.setMensage.bind(this);
        this.setStatusMenu = this.setStatusMenu.bind(this);
        this.getUpdateSize = this.getUpdateSize.bind(this);

    }
    componentDidMount(){
        window.addEventListener("resize", this.getUpdateSize);
    }

    getUpdateSize() {
        this.setState({
          ScreenHeight: window.innerHeight, 
          ScreenWidth: window.innerWidth
        });
    }
    setMensage(event){
        event.preventDefault();
        this.setState({Mensage: 'Olaa'});
    }
    setStatusMenu(){
        this.setState({statusMenu: !this.state.statusMenu});
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.getUpdateSize);
    }
    render(){
        return(
            <div>
                <Router id="system_master">
                    <div>
                        <MainMenu setStatusMenu={this.setStatusMenu} statusMenu={this.state.statusMenu} setMensage={this.setMensage} Mensage={this.state.Mensage}/>                
                        <MainContent ScreenWidth={this.state.ScreenWidth} setStatusMenu={this.setStatusMenu} statusMenu={this.state.statusMenu} setMensage={this.setMensage} Mensage={this.state.Mensage}/>
                    </div>
                </Router>
            </div>
        );
    }
}