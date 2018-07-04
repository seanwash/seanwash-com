require('dotenv').config()

module.exports = {
  mode: 'universal',

  head: {
    title: 'Sean Washington',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: process.env.G_VERIFICATION_TOKEN
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Podcaster, software engineer, regular human being.'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Podcaster, software engineer, regular human being.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://seanwash.com/og-image.jpg'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  env: {
    GA_ID: process.env.GA_ID
  },

  loading: { color: '#000' },

  css: ['@/assets/css/poole.css', '@/assets/css/hyde.css'],
  plugins: [{ src: '~plugins/ga.js', ssr: false }],
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
