<docs>
# RecentEpisodes
</docs>

<template>
  <div>
    <h3>Recent Episodes</h3>

    <ul>
      <li
        v-for="episode in episodes"
        :key="episode.id"
      >
        <h4>
          <a :href="permalink(episode)">{{ episode.title }}</a>
        </h4>

        <p>{{ episode.description }}</p>

        <a :href="permalink(episode)">🎧 Listen</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RecentEpisodes',

  computed: {
    ...mapState({
      episodes: state => state.episodes.all
    })
  },

  methods: {
    permalink(episode) {
      return `https://dnc.show/episodes/${episode.id}`
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 0;
  list-style-type: none;
}
</style>
