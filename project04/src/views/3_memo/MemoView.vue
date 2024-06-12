<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <h2><router-link to="/memo/list">1. List : 방명록</router-link></h2>
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
