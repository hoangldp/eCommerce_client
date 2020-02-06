import { createSlice } from '@reduxjs/toolkit';

const initial = {
    token: {},
    loading: false,
    loaded: true,
    users: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initial,
    reducers: {
        loginStartAction: (state, action) => {
            return { ...state, token: {}, loaded: false, loading: true };
        },
        loginSuccessAction: (state, action) => {
            return { ...state, token: action.payload, loaded: true, loading: false };
        },
        loginFailAction: (state, action) => {
            return state;
        },
        getAllUserStartAction: (state, action) => {
            return state;
        },
        getAllUserSuccessAction: (state, action) => {
            return { ...state, users: action.payload, loaded: true, loading: false };
        },
        getAllUserFailAction: (state, action) => {
            return state;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice;
// Extract and export each action creator by name
export const { loginStartAction, loginSuccessAction, getAllUserSuccessAction } = actions;
// Export the reducer, either as a default or named export
export default reducer;