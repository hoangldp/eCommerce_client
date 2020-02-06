import { combineReducers } from 'redux';

import PostReducer from './post-reducer';
import UserReducer from './user';

export default combineReducers({
    post: combineReducers({
        info: PostReducer
    }),
    user: UserReducer
});
