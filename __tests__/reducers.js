import friends, { initialState } from '../src/reducers/friendlist';
import * as actions from '../src/actions/FriendsActions';
import { slice } from 'lodash';


const commons = {
  offset: 0,
  page: 1,
  perPage: 2
}

const sliceFriends = (array, perPage, page) => {
  const offset = (page - 1) * perPage;
  return slice(array, offset, offset + perPage);
}

describe('firend list reducers', () => {
  it('should return the initial state', () => {
    expect(friends(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FRIEND', () => {
    const expectedValue = {
      friendsById: initialState.friendsById.concat({ name: 'Jimmy Hendrix', sex: 'male', id: 13 }),
      ...commons
    }

    expect(
      friends(
        initialState,
        actions.addFriend('Jimmy Hendrix', 'male', 13)
      )
    ).toEqual(expectedValue);
  });

  it('should handle DELETE_FRIEND', () => {
    const expectedValue = {
      friendsById: initialState.friendsById.filter(item => item.id !== 0),
      ...commons
    }

    expect(
      friends(
        initialState,
        actions.deleteFriend(0)
      )
    ).toEqual(expectedValue);
  });

  it('should handle STAR_FRIEND', () => {
    const friend = initialState.friendsById.find(item => item.id === 0);
    friend.starred = true;

    const expectedValue = initialState;

    expect(
      friends(
        initialState,
        actions.starFriend(0)
      )
    ).toEqual(expectedValue);
  });
});