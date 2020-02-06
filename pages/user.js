import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/Layout';
import { getAllUser } from '../services/user-service';
import { withAuthSync } from '../utils/auth';
import Head from "next/head";

const User = ( props ) => {
    const { isServer } = props;
    const dataStore = useSelector(state => state.user.get);
    const { loading, users, token } = dataStore;

    const dispatch = useDispatch();

    return (
        <Layout>
            <Head>
                <title>User</title>
            </Head>

            <p>{ `Loading: ${loading}, isServer: ${isServer}` }</p>
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

export default withAuthSync(User);
