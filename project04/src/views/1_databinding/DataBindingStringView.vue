<template>
  <div class="content-container"> <!-- 최상위 태그가 있어야 함.(필수) -->
    <a href="/" class="goto">Home</a> /
    <a href="../binding" class="goto">Binding</a> /
    <br>
    <h1>1. String 바인딩</h1><hr>
    <h4 v-pre>● userName : {{ userName }}</h4>
    <p>userName : {{ userName }}</p>
    <h4 v-pre>● message : {{ message }}</h4>
    <p>message : {{ message }}</p>
  </div>
</template>

<script>
export default {
  // function data () {}
  data () {
    return {
      // 본문과 바인딩에 필요한 변수 선언
      userName: 'ITWILL',
      message: '아이티윌 교육센터'
    }
  }
}
</script>
