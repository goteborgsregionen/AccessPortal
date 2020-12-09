export const oidcConfig = {
  autoSignIn: true,
  authority: 'https://idptest.int.indra2.se',
  clientId: 'accessPortalClientLocalHost',
  redirectUri: 'http://localhost:1234/atkomstportalen/signin-callback',
  responseType: 'code',
  scope: 'openid profile roles email accessPortalApi',
};

export default {
  oidcConfig,
};
