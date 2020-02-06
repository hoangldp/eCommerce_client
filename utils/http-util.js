import cookie from "js-cookie";
import Router from "next/router";

export const fetchWithCredentials = async (url, options, repeat) => {
    var jwtToken = getJwtToken();
    options = options || {};
    options['mode'] = 'cors';
    options.headers = options.headers || {};
    options.headers['Authorization'] = 'Bearer ' + jwtToken;
    var response = await fetch(url, options);
    if (response.ok) { //all is good, return the response
        return response;
    }

    if (!repeat && response.status === 401 && response.headers.has('Token-Expired')) {
        var refreshToken = getRefreshToken();

        var refreshResponse = await refresh(jwtToken, refreshToken);
        if (!refreshResponse.ok) {
            removeToken();
            await logout();
            return response; //failed to refresh so return original 401 response
        }
        var jsonRefreshResponse = await refreshResponse.json(); //read the json with the new tokens

        saveToken(jsonRefreshResponse);
        return await fetchWithCredentials(url, options, true); //repeat the original request
    } else { //status is not 401 and/or there's no Token-Expired header
        if (response.status === 401) {
            await logout();
        }
        return response; //return the original 401 response
    }
};

async function refresh(jwtToken, refreshToken) {
    const url = 'http://localhost:5000/api/user/refresh';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({token: jwtToken, refreshToken: refreshToken}),
        headers: {'Content-Type': 'application/json'}
    });
}

function getJwtToken() {
    const tokenModel = cookie.get('token');
    if (!tokenModel) return localStorage.getItem('token');

    const { token } = JSON.parse(tokenModel);
    return token;
}

function getRefreshToken() {
    const tokenModel = cookie.get('token');
    if (!tokenModel) return localStorage.getItem('refreshToken');

    const { refreshToken } = JSON.parse(tokenModel);
    return refreshToken;
}

export const saveToken = (token) => {
    // Create a cookie that expires 1 days from now, valid across the entire site
    cookie.set('token', token, { expires: 1 });

    localStorage.setItem('token', token.token);
    localStorage.setItem('refreshToken', token.refreshToken);
};

export const removeToken = () => {
    cookie.remove('token');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
};

export const logout = async () => {
    cookie.remove('token');
    // to support logging out from all windows
    removeToken();
    window.localStorage.setItem('logout', Date.now());
    await Router.push('/login');
};