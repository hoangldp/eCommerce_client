import Head from 'next/head';
import { useEffect } from 'react';

import Nav from './Nav';
import BodyHeader from './BodyHeader';
import Footer from './Footer';

const Layout = ( props ) => {
    useEffect(() => {
        $.azia();
        $.dashboard();
    }, []);

    return (
        <div className="az-body az-body-sidebar">
            <Head>
                <title>Next app</title>
            </Head>

            <Nav />
            <div className="az-content az-content-dashboard-two">
                <BodyHeader/>
                <div className="az-content-body">
                    { props.children }
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
