import * as actions from '../src/actions/FriendsActions';
import * as types from '../src/constants/ActionTypes';

describe('friend list actions', () => {
  it('should handle ADD_FRIEND', () => {
    const payload = { name: 'Mark Knopfler', sex: 'male' };
    const expectedAction = {
      type: types.ADD_FRIEND,
      payload
    };
    expect(actions.addFriend('Mark Knopfler', 'male')).toEqual(expectedAction);
  });

  it('should handle DELETE_FRIEND', () => {
    const payload = { id: 0 }
    const expectedAction = {
      type: types.DELETE_FRIEND,
      payload
    };
    expect(actions.deleteFriend(0)).toEqual(expectedAction);
  });

  it('should handle STAR_FRIEND', () => {
    const payload = { id: 0 };
    const expectedAction = {
      type: types.STAR_FRIEND,
      payload
    };
    expect(actions.starFriend(0)).toEqual(expectedAction);
  });

  it('should handle SET_PAGE_OF_FRIENDS', () => {
    const expectedAction = {
      type: types.SET_PAGE_OF_FRIENDS,
    };
    expect(actions.fetchPaginated()).toEqual(expectedAction);
  });

  it('should handle NEXT_PAGE', () => {
    const expectedAction = {
      type: types.NEXT_PAGE
    };
    expect(actions.nextPage()).toEqual(expectedAction);
  });

  it('should handle PREV_PAGE', () => {
    const expectedAction = {
      type: types.PREV_PAGE
    };
    expect(actions.prevPage()).toEqual(expectedAction);
  });
});