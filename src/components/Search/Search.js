import React, {Component} from 'react';
import { connect } from 'react-redux';

//this component handles the search results,
//the query for my search results is not final, I have not yet found out how to order them by closest estimated location
//I need to add images to the restaurant database, as of right now the name is a button that takes the user to the details page

class Welcome extends Component {
    state = {
        searchInput: ""
    };

search = () => {
        let searchString = this.state.searchInput;
        console.log(`gonna search for ${searchString}`);
        this.props.dispatch({ type: "FETCH_LIST", payload: searchString });
        // this.props.history.push("/list");
      };

trackSearchInput = event => {
    this.setState({
    searchInput: event.target.value
        });
};

handleClick = (id,) => {
  this.props.dispatch({
   type: "FETCH_DETAILS", payload: id
  })
this.props.history.push('/item');
}

handleClick1 = (id,) => {
  this.props.dispatch({
   type: "FETCH_FAVORITES", payload: id
  })
}


render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.trackSearchInput}
          placeholder="zip, city"
          value={this.state.searchInput}
        />
        <button onClick={this.search}>Search</button>
        <ul>
          {this.props.search.map(restaurant => (
            <li key = {restaurant.id}>
            <button onClick={()=>this.handleClick(restaurant.id)}>{restaurant.name}</button>, {restaurant.description}
            <button onClick={()=>this.handleClick1(restaurant.id)}>Fave</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    search: state.search
});
  


export default connect(mapStateToProps)(Welcome);