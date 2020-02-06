import fetch from 'isomorphic-unfetch';

import { loginStartAction, loginSuccessAction, getAllUserSuccessAction } from '../reducers/user-reducer';
import { fetchWithCredentials, saveToken } from '../utils/http-util';

export const login = data => async (dispatch) => {
    dispatch(loginStartAction);
    await new Promise(r => setTimeout(r, 2000));
    const url = 'http://localhost:5000/api/user/authenticate';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    const dataResponse = await response.json();
    saveToken(dataResponse);
    dispatch(loginSuccessAction(dataResponse));
};

export const getAllUser = () => async (dispatch, getState) => {
    const response = await fetchWithCredentials('http://localhost:5000/api/user');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllUserSuccessAction(data));
    }
};
