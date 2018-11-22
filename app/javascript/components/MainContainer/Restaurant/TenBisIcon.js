import React, { Component } from 'react';
import TenBisImage from '/assets/images/tenbis.jpg';
import './tenbisicon.css'

class TenBisIcon extends Component {
    render() {
        const should_displey = this.props.display;
        let img_tag = <div className='ten-bis-no-icon'/>;

        if (should_displey) {
            img_tag = <img className='ten-bis-icon' src={TenBisImage}/>;
        }

        return (<div>{img_tag}</div>);
    }
}

export default TenBisIcon;
