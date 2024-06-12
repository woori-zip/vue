<template>
  <div class="body-container">
    <nav>
      <router-link to="/">🏠</router-link> |
      <router-link to="/binding">Binding</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- <router-link to="/wel">Welcome</router-link> | -->
      <router-link to="/event">Event</router-link> |
      <router-link to="/memo">Memo</router-link> |
    </nav>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background: #FFF5DA;
}

.body-container{
  background: white;
  max-width: 600px;
  margin:auto;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #FFE6E6;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px #FFE6E6;
  height: 800px;
}

.content-container{
  text-align: left;
  overflow: auto;
  padding: 5px;
  height: 700px;
  overflow: auto;
}

/* scroll bar */
.content-container::-webkit-scrollbar {
  width: 8px;
}

.content-container::-webkit-scrollbar-track {
  background: white; /* 스크롤바 트랙 색상 */
  border-radius: 10px; /* 스크롤바 모서리 둥글게 */
}

.content-container::-webkit-scrollbar-thumb {
  background: #FFE6E6; /* 스크롤바 색상 */
  border-radius: 10px; /* 스크롤바 모서리 둥글게 */
}

/* nav bar */
nav {
  padding: 10px;
  background-color: #FFE6E6;
  border-radius: 20px;
  margin-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #FF90BC;
}

a {
  color:  #FF90BC;
}

/* button */
button{
  padding:5px;
  background-color: #FFE6E6;
  border: 1px solid #FFE6E6;
  border-radius: 15px;
}

button:hover{
  background-color:#FF90BC;
  color: white;
}

/* input */
input, select{
  border: 2px solid #FFE6E6;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px #FFE6E6;
}

input:hover, input:focus, select:hover, select:focus, checkbox:focus{
  outline: none;
  border-color: #FF90BC;
  box-shadow: 0px 0px 5px 0.5px #FF90BC;
}

select option{
  background: #FFE6E6;
  padding: 3px;
}

select option:focus{
  background: #FF90BC;
}

/* table */
table{
  border-collapse: collapse;
  border-style: hidden;
  box-shadow: 0 0 0 2px #FFE6E6;
}
table thead{
  background:  #FFE6E6;
}
table th, td{
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid #FFE6E6;
}
/* 강조 */
.emp{
  font-weight: bold;
  color: #FF90BC;
}

.goto{
  color: gray;
  font-size: 15px;
  text-decoration-line: underline;
}

.goto:hover{
  background: #FFE6E6;
  border-radius: 10px;
  text-decoration-line: none;
}
</style>
