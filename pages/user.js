import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Layout from '../components/Layout';
import { login, getAllUser } from '../services/login-service';

const User = ( props ) => {
    const { isServer } = props;
    const dataStore = useSelector(state => state.user);
    const token = dataStore.data;
    const { loading, users } = dataStore;

    const dispatch = useDispatch();
    // const loadAllPost = async () => {
    //     dispatch(await startLoadAllPostAction());
    //     dispatch(await loadAllPostAction());
    // };

    useEffect(() => {
        // login(dispatch);
        // getAllUser(dispatch);
    }, []);

    return (
        <Layout>
            <p>{ `Loading: ${loading}, isServer: ${isServer}` }</p>
            <button onClick={() => login(dispatch)}>Login</button>
            <button onClick={() => dispatch(getAllUser())}>Get all user</button>
            <p>{ JSON.stringify(token) }</p>
            <p>{ JSON.stringify(users) }</p>
        </Layout>
    );
};

User.getInitialProps = async ( { store, isServer } ) => {
    // if (isServer) store.dispatch(getAllUser());
    return { isServer };
};

export default User;
