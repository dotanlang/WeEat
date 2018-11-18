import React, { Component } from 'react';
import TenBisImage from '/assets/images/tenbis.jpg';
import './tenbisicon.css'

class TenBisIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<img className='ten-bis-icon' src={TenBisImage} hidden={!this.props.display}></img>)
    }
}

export default TenBisIcon;
