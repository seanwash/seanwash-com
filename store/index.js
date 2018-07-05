export const actions = {
  async nuxtServerInit({ dispatch }) {
    // Always fill store server side since simplecast's API doesn't support CORS
    await Promise.all([
      dispatch('episodes/fetchEpisodes'),
      dispatch('episodes/fetchStats')
    ])
  }
}
