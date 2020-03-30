import React, {Component} from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {

 

    state = {
    newRestaurant: {
            name: '',
            description: '',
            image: ''
    },
            newRestaurant: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },

        newRestaurantAddress: {
            name: '',
            description: '',
            street: '',
            city: '',
            state: '',
            zip: '',
        },


    finalObject: {
            name: '',
            description: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            image: ''
        }
    
    }


    handleChange=(event, typeOf)=>{
        console.log(event.target.value, typeOf);
        this.setState({
          [typeOf]: event.target.value,
    
        })
    }

addRestaurant = (event) => {
    event.preventDefault()
    // console.log('state', this.state.newRestaurant.name)
    this.props.dispatch({ type: 'ADD_TO_LIST',  payload: this.state.finalObject})
    // this.emptyInputs()
  
}

// getAddress = () =>{
//     this.props.dispatch({ type: 'FETCH_ADDRESS',  payload: this.state.newRestaurantAddress})
// }

populateInputs= () =>{
    this.setState({
        finalObject: {
            name: 'Safari Restaurant',
            description: 'Restaurant with vibrant decor & hand-painted outdoor murals serving Somali & African cuisine.',
            street: '3010 4th Ave S,',
            city: 'Minneapolis',
            state: 'MN',
            zip: '55408',
            image: 'https://cdn.vox-cdn.com/thumbor/CU5YqSbsLGNNH2yPealupM9tSvM=/37x0:641x453/1200x900/filters:focal(37x0:641x453):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62078325/safari_20restaurant_20and_20event_20center.0.0.jpg'
        }
    });
}

// emptyInputs= () =>{
//     this.setState({
//         newRestaurant: {
//             name: '',
//             description: '',
//             street: '',
//             city: '',
//             state: '',
//             zip: '',
//         }
//     });
// }






render() {
    return (
      <div>
     <form>
        <input type="submit" onClick={this.populateInputs}/>
        <br/>
        <label for="name">Name:</label><br/>
        <input type="text" value={this.state.finalObject.name} /><br/>

        <label for="description">Description:</label><br/>
        <input type="text" value={this.state.finalObject.description} /><br/>


        <label for="street">Street:</label><br/>
        <input type="text" value={this.state.finalObject.street} /><br/>


        <label for="city">City:</label><br/>
        <input type="text" value={this.state.finalObject.city} /><br/>


        <label for="state">State:</label><br/>
        <input type="text" value={this.state.finalObject.state} /><br/>


        <label for="zip">Zip:</label><br/>
        <input type="text" value={this.state.finalObject.zip} /><br/>

        <label for="zip">Image:</label><br/>
        <input type="text" value={this.state.finalObject.image} /><br/>
        <input type="submit" onClick={this.addRestaurant}/>
        </form>
      </div>
    );
  }
}



export default connect()(NewRestaurantForm);