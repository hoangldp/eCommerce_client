import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
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
    const store = configureStore({
        reducer: allReducers,
        middleware: [thunk, ...getDefaultMiddleware()],
        preloadedState: initialState
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    }
    
    return store
};

export default makeStore;
