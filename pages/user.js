import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/Layout';
import { getAllUser } from '../services/user-service';
import { withAuthSync } from '../utils/auth';

const User = ( props ) => {
    const { isServer } = props;
    const dataStore = useSelector(state => state.user);
    const { loading, users, token } = dataStore;

    const dispatch = useDispatch();

    return (
        <Layout>
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
