import React, {Component} from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {

 

    state = {
        newRestaurant: {
            name: '',
            description: '',
            street: '',
            city: '',
            state: '',
            zip: 0,
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
    handleStreetChange = (event) => {
        console.log('event happened')
        this.setState({
            newRestaurant: {
                ...this.state.newRestaurant,
                street: event.target.value,
            }
        });
    }
    handleCityChange = (event) => {
        console.log('event happened')
        this.setState({
            newRestaurant: {
                ...this.state.newRestaurant,
                city: event.target.value,
            }
        });
    }
    handleStateChange = (event) => {
        console.log('event happened')
        this.setState({
            newRestaurant: {
                ...this.state.newRestaurant,
                state: event.target.value,
            }
        });
    }

    handleZipChange = (event) => {
        console.log('event happened')
        this.setState({
            newRestaurant: {
                ...this.state.newRestaurant,
                zip: event.target.value,
            }
        });
    }
addRestaurant = event => {
    event.preventDefault();
    console.log('help', this.state.newRestaurant.name)
    this.props.dispatch({ type: 'ADD_TO_LIST',  payload: this.state.newRestaurant})
    this.setState({
        newRestaurant: {
            name: "",
            description: "",
            street: '',
            city: '',
            state: '',
            zip: 0,
        }
    });
}




render() {
    return (
      <div>
     <form>
         <pre>{JSON.stringify(this.state)}</pre>
        <label for="name">Name:</label><br/>
        <input type="text" value={this.state.newRestaurant.name} onChange={this.handleNameChange}/><br/>

        <label for="description">Description:</label><br/>
        <input type="text" value={this.state.newRestaurant.description} onChange={this.handleDescriptionChange}/><br/>


        <label for="street">Street:</label><br/>
        <input type="text" value={this.state.newRestaurant.street} onChange={this.handleStreetChange}/><br/>


        <label for="city">City:</label><br/>
        <input type="text" value={this.state.newRestaurant.city} onChange={this.handleCityChange}/><br/>


        <label for="state">State:</label><br/>
        <input type="text" value={this.state.newRestaurant.state} onChange={this.handleStateChange}/><br/>


        <label for="zip">Zip:</label><br/>
        <input type="text" value={this.state.newRestaurant.zip} onChange={this.handleZipChange}/><br/>


        <input type="submit" onClick={this.addRestaurant}/>
        </form>
      </div>
    );
  }
}



export default connect()(NewRestaurantForm);