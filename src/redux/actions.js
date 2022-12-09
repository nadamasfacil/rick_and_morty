export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export function add_favorites(data) {
  return {
    type: ADD_FAVORITES,
    payload: data,
  }
};

export function delete_favorites (id) {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  }
}

export function filterCards (gender) {
  return {
    type: FILTER,
    payload: gender,
  }
}

export function orderCards (id) {
  return {
    type: ORDER,
    payload: id,
  }
}