export const loginStartAction = () => {
    return { type: 'LOGIN_START' };
};

export const loginSuccessAction = (data) => {
    return { type: 'LOGIN_SUCCESS', payload: data };
};

export const getAllSuccessAction = (data) => {
    return { type: 'GET_ALL_SUCCESS', payload: data };
};
