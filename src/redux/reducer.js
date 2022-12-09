import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

function rootReducer (state = initialState,{type, payload}) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters,payload],
      }
    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== payload ),
        allCharacters: state.allCharacters.filter(fav => fav.id !== payload ),
      }
    case FILTER:
      let allCharactersFilter = [...state.allCharacters];
      allCharactersFilter = allCharactersFilter.filter(el=> el.gender === payload);
      return {
        ...state,
        myFavorites: allCharactersFilter,
      }
    case ORDER:
      let allCharactersOrder = [...state.allCharacters];
      console.log(state);
      console.log(allCharactersOrder);
      if (payload === 'Ascendente')
        allCharactersOrder.sort((a,b)=>a.id-b.id);
      else
        allCharactersOrder.sort((a,b)=>b.id-a.id);
      return {
        ...state,
        myFavorites: allCharactersOrder,
      }
    default:
      return {...state};
  }
}

export default rootReducer;