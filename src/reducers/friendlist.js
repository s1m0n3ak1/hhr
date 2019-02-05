import { slice } from 'lodash';
import * as types from '../constants/ActionTypes';

const config = {
  page: 1,
  perPage: 2,
}

export const initialState = {
  page: config.page,
  perPage: config.perPage,
  offset: 0,
  friendsById: [
    {
      id: 0,
      name: 'George Washington',
      starred: false,
      sex: 'male',
    },
    {
      id: 1,
      name: 'John Adams',
      starred: false,
      sex: 'female',
    },
    {
      id: 2,
      name: 'Thomas Jefferson',
      starred: false,
      sex: 'other',
    },
    {
      id: 3,
      name: 'James Madison',
      starred: false,
      sex: 'male',
    },
    {
      id: 4,
      name: 'James Monroe',
      starred: false,
      sex: 'other',
    },
    {
      id: 5,
      name: 'John Quincy Adams',
      starred: false,
      sex: 'female',
    },
    {
      id: 6,
      name: 'Andrew Jackson',
      starred: false,
      sex: 'female',
    },
    {
      id: 7,
      name: 'Martin Van Buren',
      starred: false,
      sex: 'male',
    },
    {
      id: 8,
      name: 'William Henry Harrison',
      starred: false,
      sex: 'male',
    },
    {
      id: 9,
      name: 'John Tyler',
      starred: false,
      sex: 'other',
    },
    {
      id: 10,
      name: 'James K. Polk',
      starred: false,
      sex: 'other',
    },
    {
      id: 11,
      name: 'Zachary Taylor',
      starred: false,
      sex: 'male',
    },
    {
      id: 12,
      name: 'Millard Fillmore',
      starred: false,
      sex: 'male',
    }
  ]
};

// helper functions
const sliceFriends = (array, perPage, page) => {
  const offset = (page - 1) * perPage;
  return slice(array, offset, offset + perPage);
}

const friends = (state = initialState, action) => {
  let friends = [...state.friendsById];
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            id: state.friendsById.reduce((maxId, friend) => Math.max(friend.id, maxId), -1) + 1,
            name: action.payload.name,
            sex: action.payload.sex,
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: friends.filter(item => item.id !== action.payload.id),
      };
    case types.STAR_FRIEND:
      let friend = friends.find(item => item.id === action.payload.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends,
      };
    case types.SET_PAGE_OF_FRIENDS:
      return {
        ...state,
        totalPages: Math.ceil(friends.length / config.perPage),
        slicedFriends: sliceFriends(friends, config.perPage, state.page),
      }

    case types.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    case types.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      }
    default:
      return state;
  }
}

export default friends;
