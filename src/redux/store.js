import { createStore, applyMiddleware, combineReducers } from 'redux';
import { usersReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    users: usersReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;