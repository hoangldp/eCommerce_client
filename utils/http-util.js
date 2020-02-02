export const fetchWithCredentials = async (url, options) => {
    var jwtToken = getJwtToken();
    options = options || {};
    options['mode'] = 'cors';
    options.headers = options.headers || {};
    options.headers['Authorization'] = 'Bearer ' + jwtToken;
    var response = await fetch(url, options);
    response.headers.forEach(console.log);
    if (response.ok) { //all is good, return the response
        return response;
    }

    // response.headers.forEach(console.log);
    console.log('status', response.status);
    console.log('Token-Expired', response.headers.has('Token-Expired'));
    if (response.status === 401 && response.headers.has('Token-Expired')) {
        var refreshToken = getRefreshToken();

        var refreshResponse = await refresh(jwtToken, refreshToken);
        if (!refreshResponse.ok) {
            removeJwtToken();
            removeRefreshToken();
            return response; //failed to refresh so return original 401 response
        }
        var jsonRefreshResponse = await refreshResponse.json(); //read the json with the new tokens

        saveJwtToken(jsonRefreshResponse.token);
        saveRefreshToken(jsonRefreshResponse.refreshToken);
        return await fetchWithCredentials(url, options); //repeat the original request
    } else { //status is not 401 and/or there's no Token-Expired header
        return response; //return the original 401 response
    }
}

async function refresh(jwtToken, refreshToken) {
    const url = 'http://localhost:5000/api/user/refresh';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({token: jwtToken, refreshToken: refreshToken}),
        headers: {'Content-Type': 'application/json'}
    });
}

function getJwtToken() {
    return localStorage.getItem('token');
}

function getRefreshToken() {
    return localStorage.getItem('refreshToken');
}

function saveJwtToken(token) {
    localStorage.setItem('token', token);
}

function saveRefreshToken(refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
}

function removeJwtToken() {
    localStorage.removeItem('token');
}

function removeRefreshToken() {
    localStorage.removeItem('refreshToken');
}