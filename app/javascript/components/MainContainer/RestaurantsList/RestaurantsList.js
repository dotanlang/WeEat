import React, {Component} from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";


class RestaurantsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.restaurants && this.props.restaurants.map((rest) => <RestaurantCard key={rest.name} {...rest}/>)}
            </div>
        );
    }

}

export default RestaurantsList;
