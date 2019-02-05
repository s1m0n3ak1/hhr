import * as types from '../constants/ActionTypes';

// friends actions
export const addFriend = (name, sex) => ({
  type: types.ADD_FRIEND,
  payload: { name, sex }
});

export const deleteFriend = id => ({
  type: types.DELETE_FRIEND,
  payload: { id }
});

export const starFriend = id => ({
  type: types.STAR_FRIEND,
  payload: { id }
});

// pagination 
export const fetchPaginated = () => ({
  type: types.SET_PAGE_OF_FRIENDS,
});

export const nextPage = () => ({
  type: types.NEXT_PAGE,
});

export const prevPage = () => ({
  type: types.PREV_PAGE,
});
