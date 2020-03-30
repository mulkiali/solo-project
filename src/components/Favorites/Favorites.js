import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Favorites.css'


class Favorites extends Component {

  //items liked from search page will go on this page
  state = {
    favorite: ""
};

  componentDidMount = () => {
    this.getFavorites()
  }
  
  getFavorites = () => {
    this.props.dispatch({ type: 'FETCH_FAVORITES', 
    payload: this.state.favorite});
    this.setState({
          favorites: ""
        })
}

updateVisitStatus = (restaurant, visit) => {
  const objectToSend = {restaurant:restaurant, visit:visit}
  this.props.dispatch({
   type: 'UPDATE_STATUS', payload: objectToSend,
  })
  console.log('payload', objectToSend)

}

deleteFavorite = (id) => {

  this.props.dispatch({
   type: 'DELETE_FAVORITE', payload: id,
  })
  console.log('payload', id)

}


render() {
    return (
      <div class='body'>
      <div class='list'>
        <h2>Favorites</h2>
        <ul>
          {this.props.favorites.map(listItem => {
            return (
              <li key={listItem.id}>
            <img src={listItem.image} width='200px' height='200px'></img>
            <br/> 
                {listItem.name}
            <br/> 
                {listItem.description}
              <br/>
              {listItem.visited === true &&
                <button onClick={()=>this.updateVisitStatus(listItem.id, 'false')}>Visited</button>
              }
               {listItem.visited === false &&
                <button onClick={()=>this.updateVisitStatus(listItem.id, 'true')}>Visit</button>
              }
                <button onClick={()=>this.deleteFavorite(listItem.id)}>unfavorite</button>
              </li>
          )
      })}
      </ul>
     
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);