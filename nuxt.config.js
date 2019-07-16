import pkg from './package'
export default {
  mode: 'universal',
  config: pkg.config,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.config.description },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'theme-color', content: pkg.config.colors.seagreen },

      { 'http-equiv': 'X-UA-Compatible', content: 'IE: Edge, chrome: 1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset: UTF-8' },

      // facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: pkg.config.url },
      { hid: 'og:image', property: 'og:image', content: pkg.config.url + pkg.config.image },

      { hid: 'og:title', property: 'og:title', content: pkg.config.title },
      { hid: 'og:description', property: 'og:description', content: pkg.config.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: pkg.config.url + pkg.config.image },

      { hid: 'twitter:title', name: 'twitter:title', content: pkg.config.title },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.config.description },

    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,400i|Roboto+Slab&display=swap' },
      { rel: 'stylesheet', href: '/mdi.css' },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: pkg.config.colors.seagreen },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: pkg.config.colors.yeloworange },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  devModules: [
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
