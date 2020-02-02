import fetch from 'isomorphic-unfetch';

import { loginStartAction, loginSuccessAction, getAllSuccessAction } from '../actions/user-action';
import { fetchWithCredentials } from '../utils/http-util';

export const login = async (dispatch) => {
    dispatch(loginStartAction);
    // await new Promise(r => setTimeout(r, 2000));
    const url = 'http://localhost:5000/api/user/authenticate';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ username: "test", password: "test" }),
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    const { token, refreshToken } = data;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    dispatch(loginSuccessAction(data));
};

export const getAllUser = () => async (dispatch, getState) => {
    const response = await fetchWithCredentials('http://localhost:5000/api/user');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllSuccessAction(data));
    }
};
