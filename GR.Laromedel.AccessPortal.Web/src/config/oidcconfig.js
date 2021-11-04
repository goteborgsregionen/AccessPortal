export const oidcConfig = {
  autoSignIn: true,
    authority: 'https://idptest.goteborgsregionen.se',
  clientId: 'accessPortalClient',
    redirectUri: 'https://dev.accessportal.goteborgsregionen.se/atkomstportalen/signin-callback',
  responseType: 'code',
  scope: 'openid profile roles email accessPortalApi',
};

export default {
  oidcConfig,
};
