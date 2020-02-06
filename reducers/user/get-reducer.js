import { createSlice } from '@reduxjs/toolkit';

const initial = {
    users: [],
    loading: false,
    loaded: true
};

const postsSlice = createSlice({
    name: 'get',
    initialState: initial,
    reducers: {
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
export const { getAllUserStartAction, getAllUserSuccessAction, getAllUserFailAction } = actions;
// Export the reducer, either as a default or named export
export default reducer;