<template>
  <div class="content-container"> <!-- 최상위 태그가 있어야 함.(필수) -->
    <a href="/" class="goto">Home</a> /
    <a href="../binding" class="goto">Binding</a> /
    <br>
    <h1>2. Html 바인딩</h1><hr>
    <div>{{ htmlString }}</div>
    <div v-html = "htmlString"></div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      htmlString: '<p style="color:red">빨간색 문자</p>'
    }
  }
}
</script>
