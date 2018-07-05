require('dotenv').config()

const META = {
  title: 'Sean Washington',
  description: 'Podcaster, software engineer, regular human being.',
  image: process.env.DOMAIN + '/og-image.jpg'
}

module.exports = {
  mode: 'universal',

  head: {
    title: META.title,
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
        content: META.description
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: META.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: META.image
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: META.title
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: META.description
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/apple-touch-icon.png'
      }
    ]
  },

  env: {
    GA_ID: process.env.GA_ID,
    DOMAIN: process.env.DOMAIN,
    SIMPLECAST_API_KEY: process.env.SIMPLECAST_API_KEY,
    SIMPLECAST_API_URL: process.env.SIMPLECAST_API_URL,
    SIMPLECAST_PODCAST_ID: process.env.SIMPLECAST_PODCAST_ID
  },

  loading: { color: '#000' },

  css: ['@/assets/css/poole.css', '@/assets/css/hyde.css'],
  plugins: [{ src: '~plugins/ga.js', ssr: false }],
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap'],

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
