import colors from 'vuetify/es5/util/colors'


export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Tetrasoft',
    title: 'Tetrasoft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tetrasoft.io portfolio and blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Customize the page transition
  */
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  /*
  ** Global CSS
  */
  css: [
    'devicon/devicon.min.css',
    '@fortawesome/fontawesome-pro/css/fontawesome.min.css',
    '@fortawesome/fontawesome-pro/css/brands.min.css',
    '@fortawesome/fontawesome-pro/css/regular.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify-transitions',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }, 
    icons: {
      iconfont: 'fa',
      values: {
        checkboxOn: 'far fa-check-square',
        checkboxOff: 'far fa-square',
        checkboxIndeterminate: 'far fa-minus-square',
        menu: 'far fa-bars',
        complete: 'far fa-check',
      },
    },
    defaultAssets: {
      icons: false,
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCSS: true,
    analyze: process.env.NODE_ENV === 'development',
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      },
    },
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if(['script', 'style', 'font'].includes(type))
          return true
        else if(/\.woff2?/.test(file))
          return true

        return false
      }
    }
  }
}
