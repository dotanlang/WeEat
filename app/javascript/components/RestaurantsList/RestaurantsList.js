import React, {Component} from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";
const axios = require('axios');


class RestaurantsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }

    componentDidMount(){
        axios.get('/restaurants.json')
            .then((response) => {return response.data;})
            .then((data) => {
                this.setState({ restaurants: data });
            });
    }

    render() {
        console.log(this.state.restaurants);
        return (
            <div>
                {this.state.restaurants && this.state.restaurants.map((rest, i) => <RestaurantCard key={i} {...rest}/>)}
            </div>
        );
    }

}

export default RestaurantsList;
