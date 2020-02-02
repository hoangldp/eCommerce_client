import { createSlice } from '@reduxjs/toolkit';

const initial = {
    data: [],
    loading: false,
    loaded: true
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initial,
    reducers: {
        getAllPostStartAction: (state, action) => {
            return { ...state, data: [], loaded: false, loading: true };
        },
        getAllPostSuccessAction: (state, action) => {
            return { ...state, data: action.payload, loaded: true, loading: false };
        },
        getAllPostFailAction: (state, action) => {
            return state;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice;
// Extract and export each action creator by name
export const { getAllPostStartAction, getAllPostSuccessAction, getAllPostFailAction } = actions;
// Export the reducer, either as a default or named export
export default reducer;