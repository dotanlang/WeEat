import React, { Component } from 'react';
import TenBisImage from '/assets/images/tenbis.jpg';

class TenBisIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<img src={TenBisImage} hidden={!this.props.display}></img>)
    }
}

export default TenBisIcon;
