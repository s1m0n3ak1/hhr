import React, { PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends, actions }) => (
  <ul className={styles.friendList}>
    {
      friends.map((friend, index) => (
        <FriendListItem
          key={index}
          id={index}
          {...friend}
          {...actions}
        />
      ))
    }
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
