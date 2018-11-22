import React, { Component } from 'react';
import RestaurantsList from "./RestaurantsList/RestaurantsList";
import Filters from "./Filters/Filters"
import Map from "./Map/Map"
import './main_container.css'
const axios = require('axios');


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating_filter: 'all',
            cuisine_filter: 'all',
            ten_bis_filter: 'all',
            search_text: '',
            restaurants: [],
            filtered_restaurants: [],
            cuisines: []
        };

        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.filterRestaurants = this.filterRestaurants.bind(this);

    }

    componentDidMount(){
        axios.get('/restaurants.json')
            .then((response) => {return response.data;})
            .then((data) => {
                let cuisines = [...new Set(data.map(x=>x.cuisine.toLowerCase()))].sort();
                cuisines.unshift('all');
                this.setState({ restaurants: data, filtered_restaurants: data, cuisines: cuisines });
            });
    }

    onChangeFilter(filter_name, value) {
        this.setState({[filter_name]: value}, this.filterRestaurants);
    }

    onChangeSearch(value){
        this.setState({search_text: value}, this.filterRestaurants);
    }

    filterRestaurants(){
        let filtered = this.state.restaurants;
        if (this.state.rating_filter != 'all'){
            filtered = filtered.filter(x => x.rating == this.state.rating_filter);
        }

        if (this.state.cuisine_filter != 'all'){
            filtered = filtered.filter(x => x.cuisine.toLowerCase() == this.state.cuisine_filter);
        }

        if (this.state.ten_bis_filter != 'all'){
            let boolValue = (this.state.ten_bis_filter == 'true');
            filtered = filtered.filter(x => x.ten_bis == boolValue || (!x.ten_bis && !boolValue));
        }

        if (this.state.search_text != ''){
            let searchText = this.state.search_text.toLowerCase();
            filtered = filtered.filter(x => x.name.toLowerCase().indexOf(searchText) !== -1)
        }

        this.setState({filtered_restaurants: filtered});
    }

    render () {
        return(
            <div>
                <Filters cuisines={this.state.cuisines} onChangeFilter={this.onChangeFilter} onChangeSearch={this.onChangeSearch}/>
                <div className='main-content'>
                    <div className='rest-list'>
                        <RestaurantsList restaurants={this.state.filtered_restaurants}/>
                    </div>
                    <div className='map'>
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer;