import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class StartsRating extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StarRatings
                rating={this.props.rating ? this.props.rating : 0}
                starRatedColor="red"
                numberOfStars={3}
                name='rating'
            />
        );
    }
}

export default StartsRating;
