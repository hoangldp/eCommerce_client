const initial = {
    data: [],
    loading: false,
    loaded: true
};

const reducer = (state = initial, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'LOAD_START':
            return { ...state, data: [], loaded: false, loading: true };
        case 'LOAD_SUCCESS':
            return { ...state, data: payload, loaded: true, loading: false };
        default:
            return state
    }
};

export default reducer;