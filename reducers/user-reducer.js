const initial = {
    data: {},
    loading: false,
    loaded: true,
    users: []
};

const reducer = (state = initial, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'LOGIN_START':
            return { ...state, data: {}, loaded: false, loading: true };
        case 'LOGIN_SUCCESS':
            return { ...state, data: payload, loaded: true, loading: false };
        case 'GET_ALL_SUCCESS':
            return { ...state, users: payload, loaded: true, loading: false };
        default:
            return state
    }
};

export default reducer;