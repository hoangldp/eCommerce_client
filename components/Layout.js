import Head from 'next/head';

import Nav from './Nav';
import BodyHeader from './BodyHeader';
import Footer from './Footer';

const Layout = ( props ) => {
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

            <script src="/lib/jquery/jquery.min.js"></script>
            <script src="/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="/lib/ionicons/ionicons.js"></script>
            <script src="/js/azia.js"></script>
            <script src="/js/dashboard.js"></script>
        </div>
    );
};

export default Layout;
