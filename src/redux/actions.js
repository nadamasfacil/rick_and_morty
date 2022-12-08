export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';

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