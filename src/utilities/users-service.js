import * as usersAPI from "./users-api";

export async function signUp(userData) {

    const token = await usersAPI.signUp(userData);
    // persist the token
    localStorage.setItem('token', token);
    return getUser();

};

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // a JWT's exp is expressed in seconds, not milliseconds
    if (payload.exp < Date.now() / 1000) {
        // token has expired - remove is from localStorage
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    // if there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
};

export function checkToken() {
    return usersAPI.checkToken().then(dateStr => new Date(dateStr));
}