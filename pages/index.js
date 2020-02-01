import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '../components/Layout';

const Index = ( props ) => {
    const { posts } = props;

    return (
        <Layout>
            {
                posts.map(post => {
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

Index.getInitialProps = async ( context ) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await data.json();
    
    return { posts: result };
};

export default Index;