import React, { PropTypes } from 'react';
import styles from './PaginateFriends.css';

const PaginateFriends = ({ currentPage, totalPages, actions }) => (
  <div className={styles.pagination}>
    <div className="button-container">
      {currentPage <= 1
        ? null
        : (
          <button
            onClick={() => {
              actions.prevPage();
              actions.fetchPaginated();
            }}
          >
            &larr; Prev
          </button>
        )
      }
    </div>
    <span>
      {currentPage} of {totalPages}
    </span>
    <div className="button-container">
      {currentPage === totalPages
        ? null
        : (
          <button
            onClick={() => {
              actions.nextPage();
              actions.fetchPaginated();
            }}
          >
            Next &rarr;
        </button>
        )
      }
    </div>
  </div>
);

PaginateFriends.defaultProps = {
  totalPages: 0,
}

PaginateFriends.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  actions: PropTypes.any,
}

export default PaginateFriends;