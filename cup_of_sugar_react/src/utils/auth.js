const LOGIN_KEY = 'isLoggedIn';
const USER_KEY = 'user';

export const login = (userObj) => {
    localStorage.setItem(LOGIN_KEY, true);
    localStorage.setItem(USER_KEY, JSON.stringify(userObj));
}

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);
    return JSON.parse(user) || {};
}

export const logout = () => {
    localStorage.setItem(LOGIN_KEY, false);
    localStorage.setItem(USER_KEY, null);
}