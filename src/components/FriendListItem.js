import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

const defineSex = type => {
  switch (type) {
    case 'male':
      return 'mars';
    case 'female':
      return 'venus';
    case 'other':
      return 'transgender-alt';
    default:
      return 'question';
  }
}

const FriendListItem = ({ id, name, sex, starred, deleteFriend, starFriend, fetchPaginated }) => (
  <li className={styles.friendListItem}>
    <div className={styles.friendInfos}>
      <div>
        <span>
          {name}
          <i
            className={`fa fa-${defineSex(sex)} ${styles.sexIcon}`}
            title={sex}
          />
        </span>
      </div>
      <div>
        <small>xx friends in common</small>
      </div>
    </div>
    <div className={styles.friendActions}>
      <button
        className={`btn btn-default ${styles.btnAction}`}
        onClick={() => starFriend(id)}
      >
        <i className={classnames('fa', {
          'fa-star': starred,
          'fa-star-o': !starred
        })} />
      </button>
      <button
        className={`btn btn-default ${styles.btnAction}`}
        onClick={() => {
          deleteFriend(id);
          fetchPaginated();
        }}
      >
        <i className="fa fa-trash" />
      </button>
    </div>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  fetchPaginated: PropTypes.func.isRequired,
};

export default FriendListItem;
