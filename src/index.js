import { fetchUsers } from './API/fetchUsers';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';


store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

