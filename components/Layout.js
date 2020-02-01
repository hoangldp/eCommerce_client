import Head from 'next/head';

import Nav from './Nav';

const Layout = ( props ) => {
    return (
        <div>
            <Head>
                <title>Next app</title>
            </Head>

            <Nav />
            { props.children }
        </div>
    );
};

export default Layout;