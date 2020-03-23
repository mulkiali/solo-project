import React, { Component } from 'react';
import {connect} from 'react-redux';



class RestaurantItem extends Component {

    //sends user back to the list page
    handleClick = () => {
        this.props.history.push('/search')
  }


  render() {
    return (
      //maps through data to display details of selected restaurant 
      <div className="Restaurant Item">
        <p>Details</p>
        <div>
          {this.props.details.map(item => {
            return (
              <div key={item.id}>
              <p> {item.name}</p>
              <p> {item.description}</p>
              <p> {item.street}, {item.city} {item.state} {item.zip}</p>
              </div>
          )
      })}
    </div>
         <button onClick={this.handleClick}>Back</button>

      </div>
     
    );
  }
}

const getStore = reduxState => ({
  details: reduxState.details,
});

export default connect(getStore)(RestaurantItem);