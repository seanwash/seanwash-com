<docs>
# HomePage
</docs>

<template>
  <section class="post">
    <h1>About</h1>

    <p>Hey there, I’m Sean Washington. I’m currently leading the charge as CTO at <a href="https://designkollective.com">Design Kollective</a>. In a nutshell:</p>

    <blockquote>
      <p>Design Kollective is an online space for you to shop from local brick and mortar furniture retailers. Browse their curated sales to find fun and unique pieces that you can have in a flash, or shop by location to find that cool shop in your local neighborhood and see what they have to offer from the comfort of your own home.</p>
    </blockquote>

    <h2 id="does-not-compute">
      <a href="https://dnc.show">Does Not Compute</a>
    </h2>

    <p>By night I’m co-host of <a href="https://dnc.show">Does Not Compute</a>, a podcast where I talk with friends about the day to day lives of web developers. To date we’ve had {{ totalListens }} listens in over 130 countries.</p>

    <recent-episodes />

    <h2>Software Development</h2>

    <p>My current tools of choice are <a href="https://www.postgresql.org/">PostgreSQL</a>, <a href="https://elixir-lang.org/">Elixir</a>, <a href="http://phoenixframework.org/">Phoenix</a>, <a href="https://www.javascript.com/">JavaScript</a>, and <a href="https://vuejs.org/">Vue.js</a>. I’m always working on new things, and if any of the above interest you feel free to stop by my <a href="https://github.com/seanwash">Github</a>.</p>

    <h2 id="around-the-web">Around the web</h2>

    <p>Find me on and <a href="https://twitter.com/seanwashbot">Twitter</a>, <a href="https://spectrum.chat/users/seanwashbot">Spectrum</a>, and <a href="https://github.com/seanwash">Github</a>.</p>
  </section>
</template>

<script>
import RecentEpisodes from '~/components/RecentEpisodes'

export default {
  name: 'HomePage',

  components: {
    RecentEpisodes
  },

  computed: {
    totalListens() {
      let listens = this.$store.state.episodes.stats.total_listens
      return new Intl.NumberFormat().format(listens)
    }
  }
}
</script>

<style scoped>
h2 a {
  color: #000000;
}
</style>
