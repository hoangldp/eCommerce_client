import fetch from 'isomorphic-unfetch';

import { getAllPostStartAction, getAllPostSuccessAction, getAllPostFailAction } from '../reducers/post-reducer';

export const loadAllPost = async () => {
    await new Promise(r => setTimeout(r, 2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.ok) return getAllPostSuccessAction(await response.json());
    return getAllPostFailAction();
};

export const loadAllPostAction = async () => async (dispatch, getState) => {
    dispatch(getAllPostStartAction());
    dispatch(await loadAllPost());
};
