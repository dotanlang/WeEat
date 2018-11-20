import React, { Component } from 'react';
import './header.css'


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <i className="material-icons md-48">control_point</i>
                <h1 className='header-text'>WeEat</h1>
                <h2 className='sub-header-text'>Eat what you love</h2>
            </div>
        )
    }
}

export default Header;