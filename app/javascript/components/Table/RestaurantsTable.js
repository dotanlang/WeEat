import React, { Component } from 'react';
import ReactTable from "react-table";
import TenBisIcon from "./TenBisIcon"
import StartsRating from "./StartsRating";
const x = require('react-table/react-table.css');

console.info('x')
console.info(x)

class RestaurantsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }


    componentDidMount(){
        fetch('/restaurants.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ restaurants: data }) });
    }

    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Cuisine',
            accessor: 'cuisine'
        }, {
            Header: 'Address',
            accessor: 'address'
        }, {
            Header: 'Ten bis',
            accessor: 'ten_bis',
            Cell: row => (<TenBisIcon display={row.value}/>)
        }, {
            Header: 'Rating',
            accessor: 'rating',
            Cell: row => (<StartsRating rating={row.value ? row.value : 0}/>)
        }
        ]

        return(<ReactTable
                data={this.state.restaurants}
                columns={columns}
            />)
    }
}

export default RestaurantsTable;
