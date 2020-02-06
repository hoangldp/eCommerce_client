import { combineReducers } from 'redux';

import LoginReducer from './login-reducer';
import GetReducer from './get-reducer';

export default combineReducers({
    login: LoginReducer,
    get: GetReducer
});
