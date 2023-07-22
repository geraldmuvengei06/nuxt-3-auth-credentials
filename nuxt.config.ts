// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    globalAppMiddleware: true,
    baseURL: process.env.NUXT_PUBLIC_API_URL,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/identity/accounts/login', method: 'post' },
        signOut: { path: '/identity/accounts/logout', method: 'get' },
        // signUp: { path: '/identity/accounts/register', method: 'post' },
        getSession: { path: '/identity/me', method: 'get' }
      },
      pages: {
        login: '/signin'
      },
      token: {
        signInResponseTokenPointer: '/accessToken'
      },
      sessionDataType: {}
    },
    enableSessionRefreshPeriodically: 5000,
    enableSessionRefreshOnWindowFocus: true,
    globalMiddlewareOptions: {
      allow404WithoutAuth: true,
      addDefaultCallbackUrl: '/'
    }
  },
})
