export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ayerah.club',
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', type: 'text/javascript', integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj', crossorigin: 'anonymous'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js', type: 'text/javascript', integrity: 'sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx', crossorigin: 'anonymous'
      }      
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },,
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css', integrity: 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2', crossorigin: 'anonymous'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src:'@/plugins/particles.js', mode: 'client'},
    {src: '@/plugins/scrollReveal.js', mode: 'client'},
    {src: '@/plugins/cookies.js', mode: 'client'},
    {src: '@/plugins/vue-modals.js', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://107.191.63.99:8000',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server:{
    port: 8800
  }
}
