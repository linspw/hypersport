import React from 'react';
import GoogleApiWrapper from './MapGeneral/MapContainer';
export default class MapGeneral extends React.Component{
    componentWillUnmount(){
        
    }
    render(){
        return(
            <div>
                <GoogleApiWrapper/>
            </div>
        );
    }
}