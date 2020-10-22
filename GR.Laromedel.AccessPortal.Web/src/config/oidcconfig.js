export const oidcConfig = {    
    autoSignIn: true,
    authority: 'https://gridpstsidentity20201020044704.azurewebsites.net',
    clientId: 'accessPortalClientLocalHost',
    redirectUri: 'http://localhost:1234',
    responseType: 'code',
    scope: 'openid profile roles email accessPortalApi'    
};

export default {
    oidcConfig
}