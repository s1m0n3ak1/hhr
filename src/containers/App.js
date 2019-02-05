import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const App = () => (
  <div>
    <Provider store={store}>
      <FriendListApp />
    </Provider>
  </div>
);

export default App;
