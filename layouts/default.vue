<template>
  <div>
    <sidebar />

    <div class="content container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
</style>
