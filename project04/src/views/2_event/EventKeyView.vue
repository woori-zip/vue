<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <a href="/event" class="goto">Event</a> /
    <h2>3. Key Event</h2><hr>
    <input type="search" v-model="keyWord" @keyup.enter="doSearch">
    &nbsp;
    <button @click="doSearch">조회</button>
    <!-- keyup이벤트의 세부 속성들 -->
    <!-- .enter -->
    <!-- .tab -->
    <!-- .delete -->
    <!-- .space -->
    <!-- .ctrl.enter -->
    <hr>

    <!-- $event 현재 시점에서 발생한 이벤트 -->
    <p>● <span class="emp">$event</span> : 현재 시점에서 발생한 이벤트</p>
    <input type="search" v-model="keyWord2" @keyup="checkEnter($event)">
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyWord: '',
      keyWord2: ''
    }
  },
  methods: {
    doSearch () {
      alert(this.keyWord)
    },
    checkEnter (event) {
      // alert(event)
      // console.log(event)
      if (event.keyCode === 13) { // 엔터키를 눌렀다면
        this.doSearch()
      }
    }
  }
}
</script>

<style>

</style>
