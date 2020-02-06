import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import { useForm } from 'react-hook-form';
import {useEffect} from "react";
import Router from "next/router";

import { login } from '../services/user-service';

const Login = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const dataStore = useSelector(state => state.user.login);
    const { token, loading } = dataStore;

    useEffect(() => {
        if (token.token) Router.push('/');
    }, [token]);

    const onSubmit = async (data) => {
        dispatch(login(data));
    };

    return (
        <div className="az-body">
            <Head>
                <title>Login</title>
            </Head>

            <div className="az-signin-wrapper">
                <div className="az-card-signin">
                    <h1 className="az-logo">az<span>i</span>a</h1>
                    <div className="az-signin-header">
                        <h2>Welcome back!</h2>
                        <h4>Please sign in to continue</h4>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="username" ref={register} placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" ref={register} placeholder="Enter your password" />
                            </div>
                            <button className="btn btn-az-primary btn-block" type="submit" disabled={loading}>Sign In</button>
                        </form>
                    </div>
                    <div className="az-signin-footer">
                        <p><a href="">Forgot password?</a></p>
                        <p>Don't have an account? <a href="page-signup.html">Create an Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;