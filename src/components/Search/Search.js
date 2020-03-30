import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Search.css'


class Search extends Component {
    state = {
        searchInput: "",
        edit: {
          name: '',
          description: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          editable: false
      }
}

search = () => {
        let searchString = this.state.searchInput;
        console.log(`gonna search for ${searchString}`);
        this.props.dispatch({ type: "FETCH_LIST", 
        payload: searchString });
        // this.props.history.push("/list");
      };

trackSearchInput = event => {
    this.setState({
    searchInput: event.target.value
        });
};

handleClick = (id,) => {
  this.props.dispatch({
   type: 'FETCH_DETAILS', payload: id
  })
this.props.history.push('/item');
}

handleClick1 = (id) => {
  const user = this.props.user.id
  const data = {id, user}
  this.props.dispatch({ type: 'ADD_TO_FAVORITES', payload: data});
  alert('added!')
  // console.log('user', user)
  // console.log('id', id)
}

// delete = (id) => {
//   this.props.dispatch({
//    type: 'DELETE_ITEM', payload: id
//   })
// }

// edit = () => {
//   this.setState({
//     editable: true,
//   });
// }

// save = (id) => {
//   this.setState({
//    editable: true,
//   });
//   this.props.dispatch({
//     type: 'EDIT_ITEM', payload: id
//    })
// }

handleChange=(event, typeOf)=>{
  console.log(event.target.value, typeOf);
  this.setState({
    [typeOf]: event.target.value,

  })
}

add = () => {
  this.props.history.push('/form');
}


render (props) {
    return (
      <div class='body'>
      <div class='results'>
      Search for halal restaurants in your city!
      <br/>
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
            <button class ='imagebtn' onClick={()=>this.handleClick(restaurant.id)}><img height= '200px' height= '200px'src={restaurant.image}/></button>
            <br/>
            {restaurant.name}
            <br/>
            {restaurant.description}
            <br/>
            <button  class='favorite' onClick={()=>this.handleClick1(restaurant.id)}>Favorite</button>
   
            {/* <button onClick={()=>this.delete(restaurant.id)}>Delete</button> */}
            
            {/* {this.state.edit.editable ?
            <>
            <input onChange={this.handleChange} placeholder='type'></input>
              <button onClick={()=>this.save(restaurant.id)}>Save</button> 
              </>  :
              <button onClick={()=>this.edit(restaurant.id)}>Edit</button> 
              
              } */}
            
            
            </li>
          ))}
        </ul>
        {/* <button onClick={()=>this.add()}>Add New Restaurant</button> */}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    search: state.search,
    user: state.user
});
  





export default connect(mapStateToProps)(Search);