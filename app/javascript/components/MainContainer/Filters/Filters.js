import React, { Component } from 'react'
import './filters.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../AddRestaurantForm/AddRestaurantForm'
import AddRestaurantForm from '../AddRestaurantForm/AddRestaurantForm'
import Portal from '../../Portal'
const axios = require('axios')

class Filters extends Component {
    constructor(props){
        super(props);

        this.state = {
            rating_filter_selected: 'all',
            cuisine_filter_selected: 'all',
            ten_bis_filter_selected: 'all'
        }
    }

    onChangeRating = (event) => {
        this.setState({rating_filter_selected: event.value})
        this.props.onChangeFilter('rating_filter', event.value);
    }

    onChangeCuisine = (event) => {
        this.setState({cuisine_filter_selected: event.value})
        this.props.onChangeFilter('cuisine_filter', event.value);
    }

    onChangeTenBis = (event) => {
        this.setState({ten_bis_filter_selected: event.value})
        this.props.onChangeFilter('ten_bis_filter', event.value);
    }

    onChangeSearch = (event) => {
        this.props.onChangeSearch(event.target.value);
    }

    showPortal = () => {
        this.setState({ show: true });
    }

    hidePortal = () => {
        this.setState({ show: false, errorMsg: "" });

    }

    createRestaurant = (values) => {
        axios.post('/restaurants', {
            ...values
        })
            .then((response) => {
                this.hidePortal();
                this.props.reloadRestaurants();
                return response.data;
            })
            .catch((error) => {
                this.setState({ errorMsg: "Can't create new restaurant"});
            });
    };


    render() {
        return (
            <div className='filters-container'>
                <label className='filter-name'>Rating:</label>
                <Dropdown options={['all', '1', '2', '3']}
                          onChange={this.onChangeRating}
                          value={this.state.rating_filter_selected}
                          placeholder="Rating" />

                <label className='filter-name'>Cuisine:</label>
                <Dropdown options={this.props.cuisines}
                          onChange={this.onChangeCuisine}
                          value={this.state.cuisine_filter_selected}
                          placeholder="Cuisine" />

                <label className='filter-name'>Ten Bis?</label>
                <Dropdown options={['all', 'true', 'false']}
                          onChange={this.onChangeTenBis}
                          value={this.state.ten_bis_filter_selected}
                          placeholder="Ten Bis" />

                <label className='filter-name'>Search:</label>
                <input type='text' className='search-box' onChange={this.onChangeSearch}/>

                <Portal>
                    { this.state.show &&
                        <div className='portal'>
                            <AddRestaurantForm cuisines={this.props.cuisines}
                                               createRestaurant={this.createRestaurant}
                                               cancel={this.hidePortal}
                                               errorMsg={this.state.errorMsg} />
                        </div>
                     }
                </Portal>

                <button className='add-rest-button' onClick={this.showPortal}>Add Restaurant</button>
            </div>
        )
    }
}

export default Filters;