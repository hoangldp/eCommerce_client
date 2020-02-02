import { createAction, createReducer } from '@reduxjs/toolkit';

const initial = {
    data: [],
    loading: false,
    loaded: true
};

export const getAllPostStartAction = createAction('GET_ALL_POST_START');
export const getAllPostSuccessAction = createAction('GET_ALL_POST_SUCCESS');
export const getAllPostFailAction = createAction('GET_ALL_POST_FAIL');

const reducer = createReducer(initial, {
    [getAllPostStartAction]: (state, action) => {
        return { ...state, data: [], loaded: false, loading: true };
    },
    [getAllPostSuccessAction]: (state, action) => {
        return { ...state, data: action.payload, loaded: true, loading: false };
    },
    [getAllPostFailAction]: (state, action) => { return state }
});

export default reducer;