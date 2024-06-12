<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <h2><router-link to="/event/click">1. Click</router-link></h2>
    <hr>
    <h2><router-link to="/event/change">2. Change</router-link></h2>
    <hr>
    <h2><router-link to="/event/key">3. Key</router-link></h2>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goBack () {
    }
  }
}
</script>

<style>
a {
  color:  #2c3e50;
  text-decoration-line: none;
}

a:hover{
  text-decoration-line: underline;
  text-decoration-color: #FFE6E6;
  text-decoration-thickness: 5px;
}

hr{
  border: 1px solid #FFE6E6;
}
</style>
