import React from 'react';

export default class ConfigSetup extends React.Component{
    render(){
        return(
            <div className="dynamic-grid-container" >
                <div className="dynamic-grid-item-title"><span className="text-style-forged">Configuração</span></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Body</div></div></div>
                <div className="dynamic-grid-item-bigcolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Big Body</div></div></div>
                <div className="dynamic-grid-item-bigcolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Big Body</div></div></div>
                <div className="dynamic-grid-item-doublecolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Double Body</div></div></div>
                <div className="dynamic-grid-item-doublecolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Double Body</div></div></div>
                <div className="dynamic-grid-item-doublecolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Double Body</div></div></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Body</div></div></div>
                <div className="dynamic-grid-item"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Body</div></div></div>
                <div className="dynamic-grid-item-bigcolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Big Body</div></div></div>
                <div className="dynamic-grid-item-bigcolumn"><div className="card-default"><div className="card-default-header">Header</div><div className="card-default-body">Big Body</div></div></div>
            </div>
        );
    }
}