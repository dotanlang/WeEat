import React, { Component } from 'react';

const TableRow = ({row}) => (
<tr>
  <td key={row.name}>{row.name}</td>
  <td key={row.cuisine}>{row.cuisine}</td>
  <td key={row.address}>{row.address}</td>
  <td key={row.ten_bis}>{row.ten_bis}</td>
  <td key={row.rating}>{row.rating}</td>
</tr>
)

const Table = ({data}) => (
<table>
  {data.map(row => {
    <TableRow row={row} />
  })}
</table>
)

class App extends Component {

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
    return
      <div>
        <div> {this.props.title} </div>
        <Table data={this.state.restaurants} />
      </div>
  }
}

export default App;
