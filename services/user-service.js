import fetch from 'isomorphic-unfetch';

import { loginStartAction, loginSuccessAction, loginFailAction } from '../reducers/user/login-reducer';
import { getAllUserStartAction, getAllUserSuccessAction, getAllUserFailAction } from '../reducers/user/get-reducer';
import { fetchWithCredentials, saveToken } from '../utils/http-util';

export const login = data => async (dispatch) => {
    dispatch(loginStartAction());
    const url = 'http://localhost:5000/api/user/authenticate';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const dataResponse = await response.json();
        saveToken(dataResponse);
        dispatch(loginSuccessAction(dataResponse));
    } else {
        dispatch(loginFailAction());
    }
};

export const getAllUser = () => async (dispatch, getState) => {
    dispatch(getAllUserStartAction());
    const response = await fetchWithCredentials('http://localhost:5000/api/user');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllUserSuccessAction(data));
    } else {
        dispatch(getAllUserFailAction());
    }
};
