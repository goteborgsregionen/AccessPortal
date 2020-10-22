export const oidcSettings = {    
    authority: 'https://gridpstsidentity20201020044704.azurewebsites.net',
    client_id: 'accessPortalClientLocalHost',
    redirect_uri: 'http://localhost:1234/signin-callback.html',
    silent_redirect_uri: 'http://localhost:1234/silent-renew.html',
    response_type: 'code',
    scope: 'openid profile roles',
    post_logout_redirect_uri: 'http://localhost:1234'      
};

export default {
    oidcSettings
}