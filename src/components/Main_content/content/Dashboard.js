import React from 'react';
import Tabela from '../../GeneralElements/Tabela';



export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state=({
            db: [],
            isLoad: false
        });
        this.exibirUsers();
    }

    exibirUsers(){
        fetch("http://127.0.0.1:8080/SystemReact/hypersport/src/api/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                db: responseJson,
                isLoad: true
            });
        })
    }
    componentWillUnmount(){
        this.state=({
            db: [],
            isLoad: false
        });
    }
    render(){
        return(
                <div className="dynamic-grid-container" >
                    <div className="dynamic-grid-item-title"><span className="text-style-modern">DashBoard</span></div>
                    <div className="dynamic-grid-item-bigcolumn"><div className="card-default">
                        <div className="card-default-header"><Tabela data={this.state.db}/></div>
                        <div className="card-default-body">Body</div></div>
                    </div>
                </div>
            );
        }
}