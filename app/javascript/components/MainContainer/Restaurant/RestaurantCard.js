import React, { Component } from 'react';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons
} from "@material/react-card";

import StartsRating from "./StartsRating";
import TenBisIcon from "./TenBisIcon"
import './restaurant_card.css'

// import '@material/react-card/dist/card.css';
const x = require('@material/react-card/dist/card.css')


class RestaurantCard extends Component {
    constructor(props) {
        super(props);
        console.log('props=' + props)
    }

    render() {
        return (
            <div className='card'>
                <Card>
                    <h1 className='content'>{this.props.name}</h1>
                    <CardPrimaryContent className='content'>

                        <div id='cusine_icon'></div>
                        <div id='cuisine_type'>{this.props.cuisine}</div>
                        <div id='address'>{this.props.address}</div>
                        <TenBisIcon display={this.props.ten_bis}/>
                        <StartsRating rating={this.props.rating}/>

                        <CardActions>
                            <CardActionButtons>
                                <button>See Reviews</button>
                                <button>Add Review</button>
                            </CardActionButtons>
                        </CardActions>
                    </CardPrimaryContent>
                </Card>
            </div>
        );
    }
}

export default RestaurantCard;