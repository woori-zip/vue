<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <a href="/event" class="goto">Event</a> /
    <h2>1. Click Event</h2><hr>
    <button @click="increaseCounter">❤️</button>
    <span>&nbsp;{{ counter }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter += 1
    }
  }
}
</script>

<style>
</style>
