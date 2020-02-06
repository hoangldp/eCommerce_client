import {useState} from 'react';
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import Head from "next/head";

import { withAuthSync } from '../utils/auth';
import Layout from '../components/Layout';

const Cookie = ( props ) => {
    const testServer = props.test;

    const [test, setTest] = useState({});

    const handleSetCookie = () => {
        cookie.set('test', {a: 1, b: 2}, { expires: 1 });
        cookie.set('token', {a: 1, b: 2}, { expires: 1 });
        console.log("set cookie success");
    };

    const handleGetCookie = () => {
        const test = cookie.get('test');
        setTest(JSON.parse(test));
    };

    return (
        <Layout>
            <Head>
                <title>Next app</title>
                <script src="/js/cookie.js"></script>
            </Head>

            <button onClick={handleSetCookie}>Set cookie</button>
            <button onClick={handleGetCookie}>Get cookie</button>
            <pre>{ JSON.stringify(test) }</pre>
            <pre>{ JSON.stringify(testServer) }</pre>
        </Layout>
    );
};

Cookie.getInitialProps = async (context) => {
    const { test } = nextCookie(context);
    return { test };
};

export default withAuthSync(Cookie);
