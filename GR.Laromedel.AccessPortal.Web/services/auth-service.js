const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}

const logout = () => {
    localStorage.removeItem("user");
};

const login = (response) => {
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
}

export default {
    authHeader,
    logout,
    login
};