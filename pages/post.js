import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Layout from '../components/Layout';
import { loadAllPostAction, loadAllPost } from '../services/post-service';

const Post = ( props ) => {
    const { isServer } = props;
    const dataStore = useSelector(state => state.post.info);
    const posts = dataStore.data;
    const { loading } = dataStore;

    const dispatch = useDispatch();
    const loadAllPost = async () => {
        // dispatch(await startLoadAllPostAction());
        dispatch(await loadAllPostAction());
    };

    useEffect(() => {
        if (!isServer) loadAllPost();
    }, []);

    useEffect(() => {
        console.log(`Loading: ${loading}`);
    }, [loading]);

    useEffect(() => {
        return async () => {
            // dispatch(await startLoadAllPostAction());
        }
    }, []);

    return (
        <Layout>
            { `Loading: ${loading}, isServer: ${isServer}` }
            {
                loading
                    ? <div>Loading...</div>
                    : posts.map(post => {
                        return (
                            <p key={ post.id }>
                                <Link href={ "/" + post.id }><a>{ post.title }</a></Link>
                            </p>
                        );
                    })
            }
        </Layout>
    );
};

Post.getInitialProps = async ( { store, isServer } ) => {
    if (isServer) store.dispatch(await loadAllPost());
    return { isServer };
};

export default Post;
