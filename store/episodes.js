const SIMPLECAST_PODCAST_ID = process.env.SIMPLECAST_PODCAST_ID
const SIMPLECAST_API_KEY = process.env.SIMPLECAST_API_KEY

export const state = () => ({
  all: []
})

export const getters = {
  getById: state => id => {
    return state.all.find(episode => `${episode.id}` === id)
  }
}

export const mutations = {
  replace(state, episodes) {
    state.all = episodes
  }
}

export const actions = {
  fetchAll({ state, commit }) {
    return new Promise((resolve, reject) => {
      if (state.all.length) {
        resolve(state.all)
        return
      }

      let req = this.$axios.get(
        `/podcasts/${SIMPLECAST_PODCAST_ID}/episodes.json?SIMPLECAST_API_KEY=${SIMPLECAST_API_KEY}`
      )

      req.then(res => {
        // TODO: Not sure how to get only published episodes from the API as
        // there aren't any docs.
        let episodes = res.data.filter(episode => {
          return episode.published
        })

        commit('replace', episodes.slice(0, 3))
        resolve(res.data)
      })

      req.catch(err => {
        reject(err.response)
      })
    })
  }
}
