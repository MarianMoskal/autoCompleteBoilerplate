//import reducer!!!!!
// import { createStore } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = {}, action) => state;

let store = createStore(reducer, applyMiddleware(thunk));

export default store;