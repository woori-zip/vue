<template>
  <div class="content-container"> <!-- 최상위 태그가 있어야 함.(필수) -->
    <a href="/" class="goto">Home</a> /
    <a href="../binding" class="goto">Binding</a> /
    <br>
    <h1>3. Input 바인딩 - 양방향</h1><hr>
    <input type="text" v-model="userId">
    <p>{{ userId }}</p>

    <h3>1. 이벤트 바인딩</h3>
    <!-- <button onclick="myFunction()">클릭</button> -->
    <button @click="myFunction">click</button> <!-- 파라미터가 없다면 () 생략가능 -->
    &nbsp;
    <button @click="changeData">change</button>

    <h3>2. 숫자 바인딩</h3>
    <h4>1) v-model</h4>
    <input type="text" v-model="num1">
    &nbsp;
    <input type="text" v-model="num2">
    <span> = {{ num1+num2 }}</span>
    <h4>2) v-model.number</h4>
    <input type="text" v-model.number="num3">
    &nbsp;
    <input type="text" v-model.number="num4">
    <span> = {{ num3+num4 }}</span>

    <h3>3. select 바인딩</h3>
    <select v-model="selectedCity">
      <option disabled selected>지역 🐶</option>
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>

    <h3>4. checkbox 바인딩</h3>
    <div>
      <input type="checkbox" id="html" value="HTML" v-model="favoriteLang">
      <label for="html"> Hyper Text Markup Language</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="CSS" v-model="favoriteLang">
      <label for="css"> Cascading Style Sheet</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="JS" v-model="favoriteLang">
      <label for="js"> JavaScript</label>
    </div>
    <p>선택한 과목 : {{ favoriteLang }}</p>

    <h3>5. radio 바인딩</h3>
    <div>
      <input type="radio" id="food1" value="짜장면" v-model="favoriteFood">
      <label for="food1">짜장면</label>
    </div>
    <div>
      <input type="radio" id="food2" value="짬뽕" v-model="favoriteFood">
      <label for="food2">짬뽕</label>
    </div>
    <div>
      <input type="radio" id="food3" value="탕수육" v-model="favoriteFood">
      <label for="food3">탕수육</label>
    </div>
    <p>좋아하는 음식 : {{ favoriteFood }}</p>
  </div>
</template>

<script>
export default {
  // function data () {}
  data () {
    return {
      userId: 'itwill.co.kr',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      selectedCity: '064', // 02|051|064
      // favoriteLang: ['JS'] 여러개 선택이 가능한 값은 반드시 배열로 선언
      favoriteLang: ['JS'], // 초기값 설정
      favoriteFood: ''
    }
  },
  methods: {
    changeData () {
      this.userId = 'KOREA'
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
p{
  text-decoration-line: underline;
  text-decoration-color: #FFE6E6;
  text-decoration-thickness: 3px;
}
</style>
