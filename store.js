import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './reducers';

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (initialState, options) => {
    return createStore(allReducers, initialState, applyMiddleware(thunk));
};

export default makeStore;
