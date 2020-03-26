import React, {Component} from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {

  //items liked from search page will go on this page

  componentDidMount = () => {
    this.getFavorites()
  }
  
  getFavorites = () => {
    this.props.dispatch({ type: 'FETCH_FAVORITES'});
}

addToFavorites = (favorites) => (event) =>{
    this.props.dispatch({ type: 'ADD_TO_FAVORITES', payload: {favorites}});

}

  render() {
    return (
      <div>
        <ul>
          {this.props.favorites.map(item => {
            return (
              <li key={item.id}>
                {item.name}, {item.description}
                {item.steet}, {item.city}, {item.state} {item.zip}
              </li>
          )
      })}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);