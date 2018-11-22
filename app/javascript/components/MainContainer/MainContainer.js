import React, { Component } from 'react';
import RestaurantsList from "./RestaurantsList/RestaurantsList";
import Filters from "./Filters/Filters"
import Map from "./Map/Map"
import './main_container.css'
import { connect } from "react-redux";
import { restListResponse, restChangeFilter } from "../actions/restaurantsActions";

const axios = require('axios');


@connect((store) => {
    return {
        restaurants: store.restaurantsList
    };
})
class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);

    }

    componentDidMount(){
        this.reloadRestaurants();
    }

    reloadRestaurants = () => {
        axios.get('/restaurants.json')
            .then((response) => {return response.data;})
            .then((data) => {
                let cuisines = [...new Set(data.map(x=>x.cuisine.toLowerCase()))].sort();
                cuisines.unshift('all');
                this.props.dispatch(restListResponse(data, data, cuisines));
            });
    }


    onChangeFilter(filter_name, value) {
        this.props.dispatch(restChangeFilter(filter_name, value));
    }

    onChangeSearch(value){
        this.props.dispatch(restChangeFilter('search_text', value));
    }

    createRestList(){
        let filtered = this.props.restaurants.restaurants;
        if (this.props.restaurants.rating_filter != 'all'){
            filtered = filtered.filter(x => x.rating == this.props.restaurants.rating_filter);
        }

        if (this.props.restaurants.cuisine_filter != 'all'){
            filtered = filtered.filter(x => x.cuisine.toLowerCase() == this.props.restaurants.cuisine_filter);
        }

        if (this.props.restaurants.ten_bis_filter != 'all'){
            let boolValue = (this.props.restaurants.ten_bis_filter == 'true');
            filtered = filtered.filter(x => x.ten_bis == boolValue || (!x.ten_bis && !boolValue));
        }

        if (this.props.restaurants.search_text != ''){
            let searchText = this.props.restaurants.search_text.toLowerCase();
            filtered = filtered.filter(x => x.name.toLowerCase().indexOf(searchText) !== -1)
        }

        let rest_list_div = <RestaurantsList restaurants={filtered}/>;

        if (filtered.length == 0){
            rest_list_div = <div>No restaurants to present, try changing the filters</div>;
        }

        return rest_list_div;
    }

    render () {
        return(
            <div>
                <Filters cuisines={this.props.restaurants.cuisines}
                         onChangeFilter={this.onChangeFilter}
                         onChangeSearch={this.onChangeSearch}
                         reloadRestaurants={this.reloadRestaurants}
                />
                <div className='main-content'>
                    <div className='rest-list'>
                        {this.createRestList()}
                    </div>
                    <div className='map'>
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer;