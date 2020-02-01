import fetch from 'isomorphic-unfetch';

export const startLoadAllPostAction = async () => {
    return { type: 'LOAD_START' };
};

export const loadAllPostAction = async () => {
    await new Promise(r => setTimeout(r, 2000));
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await data.json();

    return { type: 'LOAD_SUCCESS', payload: result };
};
