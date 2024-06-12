<template>
  <div class="content-container"> <!-- 최상위 태그가 있어야 함.(필수) -->
    <a href="/" class="goto">Home</a> /
    <h2><router-link to="/databinding/string">1. String</router-link></h2>
    <hr>
    <h2><router-link to="/databinding/html">2. Html</router-link></h2>
    <hr>
    <h2><router-link to="/databinding/input">3. Input</router-link></h2>
    <hr>
    <h2><router-link to="/databinding/attribute">4. Attribute</router-link></h2>
    <hr>
    <h2><router-link to="/databinding/list">5. List</router-link></h2>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
