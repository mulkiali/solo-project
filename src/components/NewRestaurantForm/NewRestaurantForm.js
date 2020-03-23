import React, {Component} from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {

    //not finished

    state = {
        newRestaurant: {
            name: '',
            description: '',
        }
    }

    handleNameChange = (event) => {
        console.log('event happened')
        this.setState({
            newRestaurant: {
                ...this.state.newRestaurant,
                name: event.target.value,
            }
        });
    }

    handleDescriptionChange = (event) => {
        console.log('event happened')
        this.setState({
            newRestaurant: {
                ...this.state.newRestaurant,
                description: event.target.value,
            }
        });
    }
  
addRestaurant = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TO_LIST',  payload: this.state.newRestaurant})
    this.setState({
        newRestaurant: {
            name: '',
            description: ''
        }
    });
}



render() {
    return (
      <div>
     <form>
        <label for="street">Name:</label><br/>
        <input type="text" value={this.state.newRestaurant.name} onChange={this.handleNameChange}/><br/>

        <label for="street">Description:</label><br/>
        <input type="text" value={this.state.newRestaurant.description} onChange={this.handleDescriptionChange}/><br/>
{/* 
        <label for="street">Street:</label><br/>
        <input type="text" /><br/>

        <label for="city">City:</label><br/>
        <input type="text" />
        <br/>

        <label for="street">State:</label><br/>
        <input type="text" /><br/>


        <label for="street">Zip:</label><br/>
        <input type="text" /><br/> */}
        <input type="submit" onSubmit={this.addRestaurant}/>
        </form>
      </div>
    );
  }
}



export default connect()(NewRestaurantForm);