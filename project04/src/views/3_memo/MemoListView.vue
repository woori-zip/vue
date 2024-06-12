<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <a href="/memo" class="goto">Memo</a> /
    <br>
    <!-- MemoListView.vue -->
    <!-- 웹서버와 데이터 통신 -->
    <!-- ● Backend : SpringBoot 기반 (spring12_memo 프로젝트 참조) -->
    <h2>방명록</h2>
    <p>
      <button @click="getList">목록</button>
    </p>
    <ul>
      <li v-if="memoList.length == 0">게시물 없음</li>
      <li v-for="memo in memoList" :key="memo.memono">{{ memo.subject }} - {{ memo.writer }} <span class="emp">({{ memo.readcnt }})</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memoList: []
    }
  },
  methods: {
    getList () {
      // alert('getlist 함s수 호출')
      // fetch() 자바스크립트 기반의 서버와 데이터 통신
      fetch('http://localhost:9095/memolist').then((response) => {
        if (response.ok) {
          return response.json()
        } // if end
      }).then((json) => {
        this.memoList = json
      }) // fetch end
    }
  }
}
</script>

<style>
</style>
