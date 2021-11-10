export const oidcConfig = {
  autoSignIn: true,
    authority: process.env.IDP_AUTHORITY,
    clientId: process.env.CLIENT_ID,
    redirectUri: process.env.REDIRECT_URI,
    responseType: 'code',
    scope: 'openid profile roles email accessPortalApi',
};

export default {
  oidcConfig,
};
