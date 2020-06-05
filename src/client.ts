import { Client } from '@umbraco/headless-client'

const apiRoot = process.env.VUE_APP_UMBRACO__API || '/api/'

// setup headless client for proxying
const client = new Client({
  apiProxyUrl: `${apiRoot}/management/`,
  cdnProxyUrl: apiRoot,
  language: 'en-US'
})

export default client
