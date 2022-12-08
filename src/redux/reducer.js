import {ADD_FAVORITES, DELETE_FAVORITES} from './actions';

const initialState = {
  myFavorites: [],
}

function rootReducer (state = initialState,{type, payload}) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITES:
      return {
        myFavorites: state.myFavorites.filter( fav => fav.id !== payload ),
      }
    default:
      return {...state};
  }
}

export default rootReducer;