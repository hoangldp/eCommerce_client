import Head from 'next/head';
import Nav from './Nav';
import BodyHeader from './BodyHeader';
import Footer from './Footer';

const Layout = ( props ) => {
    return (
        <div className="az-body az-body-sidebar">
            <Head>
                <script src="/js/dashboard.js"></script>
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
