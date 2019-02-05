import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends PureComponent {
  state = {
    name: this.props.name || '',
    sex: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    const { addFriend, fetchPaginated } = this.props;
    const { sex } = this.state;
    const name = e.target.value.trim();
    if (e.which === 13) {
      addFriend(name, sex);
      fetchPaginated();
      this.setState({ name: '' });
    }
  }

  render() {
    const { name } = this.state;
    const sex = ['male', 'female', 'other'];
    return (
      <fieldset>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={name}
          name="name"
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
        <div className={styles.sexOrientation}>
          {sex.map((s, index) => (
            <label htmlFor={s} key={index}>
              <input
                type="radio"
                name="sex"
                id={s}
                value={s}
                onClick={this.handleChange}
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;
