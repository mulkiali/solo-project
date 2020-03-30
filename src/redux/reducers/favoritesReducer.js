const favoritesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FAVORITE':
        return action.payload;
        case 'ADD_TO_FAVORITES':
        return [...state, action.payload];
      default:
        return state;
    }
  };

export default favoritesReducer;
