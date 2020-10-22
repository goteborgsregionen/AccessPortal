import { UserManager } from 'oidc-client';
import { oidcSettings } from '../oidcsettings';

const userManager = new UserManager(oidcSettings);

export const getUser = () => {
    return userManager.getUser();
}

export const login = () => {
    return userManager.signinRedirect();
}

export const renewToken = () => {
    userManager.signinSilent();
}

export const logout = () => {
    userManager.signoutRedirect();
}

export default {
    getUser,
    logout,
    login,
    renewToken
};