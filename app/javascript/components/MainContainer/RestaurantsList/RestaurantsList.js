import React, {Component} from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";


class RestaurantsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.restaurants && this.props.restaurants.map((rest, i) => <RestaurantCard key={i} {...rest}/>)}
            </div>
        );
    }

}

export default RestaurantsList;
