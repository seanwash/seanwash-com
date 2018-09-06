const SIMPLECAST_API_URL = process.env.SIMPLECAST_API_URL
const SIMPLECAST_PODCAST_ID = process.env.SIMPLECAST_PODCAST_ID
const SIMPLECAST_API_KEY = process.env.SIMPLECAST_API_KEY

export const state = () => ({
  all: [],
  stats: {
    total_listens: 400000
  }
})

export const getters = {}

export const mutations = {
  replaceEpisodes (state, episodes) {
    state.all = episodes
  },

  replaceStats (state, stats) {
    state.stats = stats
  }
}

export const actions = {
  fetchEpisodes ({ state, commit }) {
    return new Promise((resolve, reject) => {
      let req = this.$axios.get(
        `${SIMPLECAST_API_URL}/podcasts/${SIMPLECAST_PODCAST_ID}/episodes.json?api_key=${SIMPLECAST_API_KEY}`
      )

      req.then(res => {
        // TODO: Not sure how to get only published episodes from the API as there aren't any docs.
        let episodes = res.data.filter(episode => {
          return episode.published
        })

        commit('replaceEpisodes', episodes.slice(0, 3))
        resolve(res.data)
      })

      req.catch(err => {
        reject(err.response)
      })
    })
  },

  fetchStats ({ state, commit }) {
    return new Promise((resolve, reject) => {
      let req = this.$axios.get(
        `${SIMPLECAST_API_URL}/podcasts/${SIMPLECAST_PODCAST_ID}/statistics.json?api_key=${SIMPLECAST_API_KEY}`
      )

      req.then(res => {
        commit('replaceStats', res.data)
        resolve(res.data)
      })

      req.catch(err => {
        reject(err.response)
      })
    })
  }
}
