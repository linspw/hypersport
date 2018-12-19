import React from 'react';

export default class Tabela extends React.Component{
    render(){
        return(
            <div>
                {this.props.data.map(
                    row=>
                    <div key={row.Id}>{row.Name}</div>
                )}
            </div>
        );
    }
}