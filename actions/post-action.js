import fetch from 'isomorphic-unfetch';

import { getAllPostStartAction, getAllPostSuccessAction } from '../reducers/post-reducer';

export const startLoadAllPostAction = async () => {
    return getAllPostStartAction();
};

export const loadAllPostAction = async () => {
    await new Promise(r => setTimeout(r, 2000));
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await data.json();

    return getAllPostSuccessAction(result);
    // return { type: 'LOAD_SUCCESS', payload: result };
};
