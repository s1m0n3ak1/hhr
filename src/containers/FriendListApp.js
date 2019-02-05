import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend, fetchPaginated, nextPage, prevPage } from '../actions/FriendsActions';
import { FriendList, AddFriendInput, PaginateFriends } from '../components';

class FriendListApp extends Component {
  componentDidMount() {
    this.props.fetchPaginated();
  }

  render() {
    const { addFriend, deleteFriend, starFriend, fetchPaginated, nextPage, prevPage } = this.props;
    const { slicedFriends, page, totalPages } = this.props.friendlist;

    const actions = {
      addFriend,
      deleteFriend,
      starFriend,
      fetchPaginated
    };

    const paginationActions = {
      nextPage,
      prevPage,
      fetchPaginated
    }

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput
          addFriend={actions.addFriend}
          fetchPaginated={actions.fetchPaginated}
        />
        <FriendList
          friends={slicedFriends === undefined ? [] : slicedFriends}
          actions={actions}
        />
        {totalPages > 1 && (
          <PaginateFriends
            currentPage={page}
            totalPages={totalPages}
            actions={paginationActions}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps,
  {
    addFriend,
    deleteFriend,
    starFriend,
    fetchPaginated,
    nextPage,
    prevPage,
  }
)(FriendListApp);
