import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import Router from 'next/router';
import withRedux from "next-redux-wrapper";

import AppStore from '../store';

const MyApp = ( { Component, pageProps, store } ) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
    // we can dispatch from here too
    // appContext.store.dispatch({type: 'FOO', payload: 'foo'});

    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
}

Router.onRouteChangeStart = () => {
    console.log('onRouteChnageStart triggered');
};

Router.onRouteChangeComplete = () => {
    console.log('onRouteChnageComplete triggered');
};

Router.onRouteChangeError = () => {
    console.log('onRouteChnageError triggered');
};

export default withRedux(AppStore)(MyApp);
