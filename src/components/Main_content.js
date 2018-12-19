import React from 'react';
import Header from './Main_content/header';
import Content from './Main_content/content';

const divMainContentActive = {
    width: 'calc(100% - 250px)',
 };
 const divMainContentDesactive = {
    width: 'calc(100% - 50px)'
 
 };
var styleValue;
export default class MainContent extends React.Component{
/*    constructor(props) {
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
            <div className="main-content" style={styleValue}>
                <Header ScreenWidth={this.props.ScreenWidth} statusMenu={this.props.statusMenu}/>
                <Content statusMenu={this.props.statusMenu}/>
            </div>
        );
    }
}